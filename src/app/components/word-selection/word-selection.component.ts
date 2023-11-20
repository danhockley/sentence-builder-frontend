import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

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
        this.apiService
            .getWordsByType(this.selectedWordType)
            .subscribe(words => {
                this.wordList = words
            })
    }

    onWordSelect(): void {
        // Logic to add the selected word to the sentence
        // You can implement this based on your application's requirements
    }
}
