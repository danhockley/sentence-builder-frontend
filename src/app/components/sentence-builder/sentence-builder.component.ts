import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-builder',
    templateUrl: './sentence-builder.component.html',
    styleUrls: ['./sentence-builder.component.scss'],
})
export class SentenceBuilderComponent {
    constructedSentence: string = ''

    // Constructor to inject the ApiService
    constructor(private apiService: ApiService) {}

    // Event handler for word selection
    onWordSelected(selectedWord: string): void {
        // Add the selected word to the constructed sentence
        this.constructedSentence += selectedWord + ' '
    }

    // Event handler for sentence submission
    onSentenceSubmit(): void {
        // Check if the constructed sentence is not empty
        if (this.constructedSentence.trim() !== '') {
            // Call the ApiService to submit the sentence
            this.apiService
                .submitSentence(this.constructedSentence.trim())
                .subscribe(() => {
                    // Clear the constructed sentence after submission
                    this.constructedSentence = ''
                })
        }
    }
}
