import { Component, Input, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-display',
    templateUrl: './sentence-display.component.html',
    styleUrls: ['./sentence-display.component.scss'],
})
export class SentenceDisplayComponent implements OnInit {
    // Input property to receive the constructed sentence from the parent component
    @Input() constructedSentence: string = ''

    // Array to store previously submitted sentences
    submittedSentences: any[] = []

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        // Refresh the list of submitted sentences on component initialization
        this.refreshSentences()
    }

    // Event handler for submitting a sentence
    submitSentence(): void {
        // Check if the constructed sentence is not empty
        if (this.constructedSentence.trim() !== '') {
            // Call the ApiService to submit the sentence
            this.apiService
                .submitSentence(this.constructedSentence)
                .subscribe(() => {
                    // After submission, refresh the list of submitted sentences
                    this.apiService.getAllSentences().subscribe(sentences => {
                        this.submittedSentences = sentences
                        // Clear the constructed sentence after submission
                        this.constructedSentence = ''
                    })
                })
        }
    }

    // Method to refresh the list of submitted sentences
    refreshSentences(): void {
        // Call the ApiService to get all submitted sentences
        this.apiService.getAllSentences().subscribe(sentences => {
            // Update the array of submitted sentences
            this.submittedSentences = sentences
        })
    }
}
