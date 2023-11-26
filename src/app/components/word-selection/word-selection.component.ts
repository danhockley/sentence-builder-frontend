import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-word-selection',
    templateUrl: './word-selection.component.html',
    styleUrls: ['./word-selection.component.scss'],
})
export class WordSelectionComponent implements OnInit {
    // Output event to notify the parent component about the selected word
    @Output() wordSelected = new EventEmitter<string>()

    // Arrays to store word types and the list of words based on the selected type
    wordTypes: string[] = []
    selectedWordType: string = ''
    wordList: string[] = []
    selectedWord: string = ''

    // Constructor to inject the ApiService
    constructor(private apiService: ApiService) {}

    // Lifecycle hook called after the component is initialized
    ngOnInit(): void {
        // Fetch and populate the array of word types from the API
        this.apiService.getWordTypes().subscribe(
            types => {
                this.wordTypes = types
            },
            error => {
                console.error('Error fetching word types:', error)
            },
        )
    }

    // Event handler for word type selection
    onWordTypeSelect(): void {
        // Fetch and populate the list of words based on the selected word type from the API
        this.apiService.getWordsByType(this.selectedWordType).subscribe(
            words => {
                this.wordList = words
            },
            error => {
                console.error('Error fetching words:', error)
            },
        )
    }

    // Event handler for word type change
    onWordTypeChange(): void {
        // Reset selectedWord when the word type changes
        this.selectedWord = ''
    }

    // Event handler for adding the selected word to the sentence
    addToSentence(): void {
        // Check if the selected word and type are not empty
        if (this.selectedWordType && this.selectedWord) {
            // Emit the selected word to the parent component
            this.wordSelected.emit(`${this.selectedWord}`)

            // Clear the selectedWordType and selectedWord for the next selection
            this.selectedWordType = ''
            this.selectedWord = ''
        }
    }
}
