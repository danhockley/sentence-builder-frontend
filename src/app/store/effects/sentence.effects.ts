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

    submitSentence$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.submitSentence),
            withLatestFrom(
                this.store.select(SentenceSelectors.getConstructedSentence),
            ),
            switchMap(([_, constructedSentence]) =>
                // Dispatching a success action after submitting the sentence
                this.apiService.submitSentence(constructedSentence).pipe(
                    map(() => SentenceActions.successfulSubmission()),
                    catchError(error =>
                        of(SentenceActions.errorSubmission({ error })),
                    ),
                ),
            ),
        ),
    )

    fetchWordTypes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.fetchWordTypes),
            switchMap(() =>
                // Fetching word types and dispatching appropriate actions
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

    fetchWordList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SentenceActions.fetchWordList),
            withLatestFrom(
                this.store.select(SentenceSelectors.getConstructedSentence),
            ),
            switchMap(([action, constructedSentence]) =>
                // Fetching word list based on the selected word type and dispatching actions
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
}