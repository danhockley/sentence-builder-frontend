import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { NgForm } from '@angular/forms'

@Component({
    selector: 'app-word-selection',
    templateUrl: './word-selection.component.html',
    styleUrls: ['./word-selection.component.scss'],
})
export class WordSelectionComponent implements OnInit {
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

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {}

    onWordTypeSelect(): void {
        // Fetch words based on the selected type
        this.apiService.getWordsByType(this.selectedWordType).subscribe(
            words => {
                console.log('Received words:', words)
                this.wordList = words
            },
            error => {
                console.error('Error fetching words:', error)
            },
        )
    }

    onWordSelect(selectedWord: string): void {
        // Logic to add the selected word to the sentence
        const newSentence = `${this.selectedWordType} ${selectedWord}`
        // Now, you can use this newSentence as needed in your application
    }
}
