import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-word-selection',
    templateUrl: './word-selection.component.html',
    styleUrls: ['./word-selection.component.scss'],
})
export class WordSelectionComponent implements OnInit {
    @Output() wordSelected = new EventEmitter<string>()

    wordTypes: string[] = [
        'Noun',
        'Verb',
        'Adjective',
        'Adverb',
        'Pronoun',
        'Preposition',
        'Conjunction',
        'Determiner',
        'Exclamation',
    ]
    selectedWordType: string = ''
    wordList: string[] = []
    selectedWord: string = ''

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {}

    onWordTypeSelect(): void {
        this.apiService.getWordsByType(this.selectedWordType).subscribe(
            words => {
                this.wordList = words
            },
            error => {
                console.error('Error fetching words:', error)
            },
        )
    }

    onWordTypeChange(): void {
        // Reset selectedWord when word type changes
        this.selectedWord = ''
    }

    addToSentence(): void {
        // Check if the selected word and type are not empty
        if (this.selectedWordType && this.selectedWord) {
            // Emit the selected word to the parent component
            this.wordSelected.emit(`${this.selectedWord}`)

            // Optionally, you can clear the selectedWordType and selectedWord for the next selection
            this.selectedWordType = ''
            this.selectedWord = ''
        }
    }
}
