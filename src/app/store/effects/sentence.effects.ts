import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { ApiService } from '../../services/api.service'
import { Store } from '@ngrx/store'
import { AppState } from '../state/sentence.state'
import * as SentenceActions from '../actions/sentence.actions'
import * as SentenceSelectors from '../selectors/sentence.selectors'

@Injectable()
export class SentenceEffects {
    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private store: Store<AppState>,
    ) {}

    // Submit a sentence to the backend, then load all sentences upon success
    submitSentence$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.submitSentence),
            withLatestFrom(
                this.store.select(SentenceSelectors.getConstructedSentence),
            ),
            switchMap(([_, constructedSentence]) => {
                // Capitalize the first letter
                constructedSentence =
                    constructedSentence.charAt(0).toUpperCase() +
                    constructedSentence.slice(1)

                return this.apiService.submitSentence(constructedSentence).pipe(
                    switchMap(() =>
                        this.apiService.getAllSentences().pipe(
                            map(sentences =>
                                SentenceActions.successfulSubmission({
                                    sentences,
                                }),
                            ),
                            catchError(error =>
                                of(SentenceActions.errorSubmission({ error })),
                            ),
                        ),
                    ),
                )
            }),
        ),
    )

    // Load sentences after a successful sentence submission
    submitSentenceSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.successfulSubmission),
            map(() => SentenceActions.loadSentences()),
        ),
    )

    // Load sentences after a successful sentence submission
    loadSentencesAfterSubmission$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.successfulSubmission),
            map(() => SentenceActions.loadSentences()),
        ),
    )

    // Load sentences from the backend
    loadSentences$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.loadSentences),
            switchMap(() =>
                this.apiService.getAllSentences().pipe(
                    map(sentences =>
                        SentenceActions.loadSentencesSuccess({ sentences }),
                    ),
                    catchError(error =>
                        of(SentenceActions.loadSentencesFailure({ error })),
                    ),
                ),
            ),
        ),
    )

    // Fetch word types and dispatch appropriate actions
    fetchWordTypes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.fetchWordTypes),
            switchMap(() =>
                this.apiService.getWordTypes().pipe(
                    map(types =>
                        SentenceActions.fetchWordTypesSuccess({ types }),
                    ),
                    catchError(error =>
                        of(SentenceActions.fetchWordTypesFailure({ error })),
                    ),
                ),
            ),
        ),
    )

    // Fetch word list based on the selected word type and dispatch actions
    fetchWordList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.fetchWordList),
            withLatestFrom(
                this.store.select(SentenceSelectors.getConstructedSentence),
            ),
            switchMap(([action, constructedSentence]) =>
                this.apiService.getWordsByType(action.category).pipe(
                    map(words =>
                        SentenceActions.fetchWordListSuccess({ words }),
                    ),
                    catchError(error =>
                        of(SentenceActions.fetchWordListFailure({ error })),
                    ),
                ),
            ),
        ),
    )

    // Delete a sentence, then load all sentences upon success
    deleteSentence$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.deleteSentence),
            switchMap(action =>
                this.apiService.deleteSentence(action.id).pipe(
                    switchMap(() =>
                        this.apiService.getAllSentences().pipe(
                            map(sentences =>
                                SentenceActions.loadSentencesSuccess({
                                    sentences,
                                }),
                            ),
                            catchError(error =>
                                of(
                                    SentenceActions.loadSentencesFailure({
                                        error,
                                    }),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    )
}
