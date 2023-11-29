import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { catchError, delay, switchMap, tap } from 'rxjs/operators'
import * as SentenceSelectors from '../../store/selectors/sentence.selectors'
import { AppState } from '../../store/state/sentence.state'
import * as SentenceActions from '../../store/actions/sentence.actions'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-builder',
    templateUrl: './sentence-builder.component.html',
    styleUrls: ['./sentence-builder.component.scss'],
    animations: [],
})
export class SentenceBuilderComponent implements OnInit {
    sentenceForm!: FormGroup
    loading = false
    constructedSentence$: Observable<string>
    submittedSentences: any[] = []

    constructor(
        private apiService: ApiService,
        private fb: FormBuilder,
        private store: Store<AppState>,
    ) {
        this.constructedSentence$ = this.store.select(
            SentenceSelectors.getConstructedSentence,
        )
    }

    ngOnInit(): void {
        this.initForm()
        this.refreshSentences()
    }

    private initForm(): void {
        this.sentenceForm = this.fb.group({
            constructedSentence: ['', Validators.required],
        })
    }

    onWordSelected(selectedWord: string): void {
        const currentSentence = this.sentenceForm.get(
            'constructedSentence',
        )!.value
        this.sentenceForm.patchValue({
            constructedSentence: currentSentence + ' ' + selectedWord,
        })
    }

    onSentenceSubmit(): void {
        if (this.sentenceForm.valid) {
            const constructedSentence = this.sentenceForm
                .get('constructedSentence')!
                .value.trim()

            // Dispatch the action with the sentence as payload
            this.store.dispatch(
                SentenceActions.setConstructedSentence({
                    sentence: constructedSentence,
                }),
            )

            this.loading = true

            // Move API call to Ngrx effect
            this.store.dispatch(SentenceActions.submitSentence())
        }
    }

    // Handle the event emitted by SentenceDisplayComponent
    handleSentenceSubmit(): void {
        this.onSentenceSubmit()
    }

    refreshSentences(): void {
        this.apiService.getAllSentences().subscribe(sentences => {
            this.submittedSentences = sentences
        })
    }
}
