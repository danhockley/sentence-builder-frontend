import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-display',
    templateUrl: './sentence-display.component.html',
    styleUrls: ['./sentence-display.component.scss'],
})
export class SentenceDisplayComponent implements OnInit {
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
    constructedSentence: string = '' // Corrected variable name
    submittedSentences: any[] = []

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        // Fetch previously submitted sentences on component initialization
        this.apiService.getAllSentences().subscribe(sentences => {
            this.submittedSentences = sentences
        })
    }

    onWordTypeSelect(): void {
        // Fetch words based on the selected type
        this.apiService
            .getWordsByType(this.selectedWordType)
            .subscribe(words => {
                this.wordList = words
            })
    }

    onWordSelect(): void {
        // Logic to add the selected word to the sentence
        if (this.selectedWord !== '') {
            this.constructedSentence += ' ' + this.selectedWord
            this.selectedWord = ''
        }
    }

    onSentenceSubmit(): void {
        // Check if the constructed sentence is not empty before submitting
        if (this.constructedSentence.trim() !== '') {
            // Logic to submit the constructed sentence to the backend
            this.apiService
                .submitSentence(this.constructedSentence)
                .subscribe(() => {
                    // Fetch updated list of submitted sentences after submission
                    this.apiService.getAllSentences().subscribe(sentences => {
                        this.submittedSentences = sentences
                        this.constructedSentence = '' // Clear the constructed sentence
                    })
                })
        }
    }
}
