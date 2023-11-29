import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as SentenceSelectors from '../../store/selectors/sentence.selectors'
import { AppState } from '../../store/state/sentence.state'
import * as SentenceActions from '../../store/actions/sentence.actions'

@Component({
    selector: 'app-sentence-builder',
    templateUrl: './sentence-builder.component.html',
    styleUrls: ['./sentence-builder.component.scss'],
    animations: [],
})
export class SentenceBuilderComponent implements OnInit {
    sentenceForm!: FormGroup
    constructedSentence$: Observable<string>
    submittedSentences$: Observable<any[]>

    constructor(private fb: FormBuilder, private store: Store<AppState>) {
        this.constructedSentence$ = this.store.pipe(
            select(SentenceSelectors.getConstructedSentence),
        )
        this.submittedSentences$ = this.store.pipe(
            select(SentenceSelectors.getAllSentences),
        )
    }

    ngOnInit(): void {
        // Initialize the form and load sentences on component initialization
        this.initForm()
        this.store.dispatch(SentenceActions.loadSentences())
    }

    private initForm(): void {
        // Initialize the sentence form with required validator
        this.sentenceForm = this.fb.group({
            constructedSentence: ['', Validators.required],
        })
    }

    onWordSelected(selectedWord: string): void {
        // Add selected word to the current sentence in the form
        const currentSentence = this.sentenceForm.get(
            'constructedSentence',
        )!.value
        this.sentenceForm.patchValue({
            constructedSentence: currentSentence + ' ' + selectedWord,
        })
    }

    onSentenceSubmit(): void {
        if (this.sentenceForm.valid) {
            // Trim and dispatch the constructed sentence for submission
            let constructedSentence = this.sentenceForm
                .get('constructedSentence')!
                .value.trim()

            this.store.dispatch(
                SentenceActions.setConstructedSentence({
                    sentence: constructedSentence,
                }),
            )

            // Dispatch the sentence submission action
            this.store.dispatch(SentenceActions.submitSentence())

            // Dispatch the action to clear the constructed sentence
            this.store.dispatch(SentenceActions.clearConstructedSentence())

            // Reset the sentenceForm value
            this.sentenceForm.setValue({
                constructedSentence: '',
            })
        }
    }
}
