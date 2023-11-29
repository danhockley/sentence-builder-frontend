import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../store/state/sentence.state'
import * as SentenceActions from '../../store/actions/sentence.actions'
import * as SentenceSelectors from '../../store/selectors/sentence.selectors'

@Component({
    selector: 'app-word-selection',
    templateUrl: './word-selection.component.html',
    styleUrls: ['./word-selection.component.scss'],
})
export class WordSelectionComponent implements OnInit {
    @Output() wordSelected = new EventEmitter<string>()
    wordTypes$ = this.store.select(SentenceSelectors.getWordTypes)
    selectedWordType: string = ''
    wordList$ = this.store.select(SentenceSelectors.getWordList)
    selectedWord: string = ''

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        // Fetch initial word types and word list
        this.store.dispatch(SentenceActions.fetchWordTypes())
    }

    onWordTypeSelect(): void {
        // Fetch word list based on the selected category
        this.store.dispatch(
            SentenceActions.fetchWordList({ category: this.selectedWordType }),
        )
    }

    onWordTypeChange(): void {
        // Reset selected word on word type change
        this.selectedWord = ''
    }

    addToSentence(): void {
        // Emit selected word to the parent component
        if (this.selectedWordType && this.selectedWord) {
            this.wordSelected.emit(`${this.selectedWord}`)
            this.selectedWordType = ''
            this.selectedWord = ''
        }
    }
}
