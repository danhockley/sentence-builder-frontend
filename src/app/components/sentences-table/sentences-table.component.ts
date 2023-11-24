import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentences-table',
    templateUrl: './sentences-table.component.html',
    styleUrls: ['./sentences-table.component.scss'],
})
export class SentencesTableComponent {
    // Input property to receive the array of submitted sentences from the parent component
    @Input() submittedSentences: any[] = []

    // Output events to notify the parent component about sentence deletions
    @Output() sentenceDeleted = new EventEmitter()

    // Constructor to inject the ApiService
    constructor(private apiService: ApiService) {}

    // Method to delete a sentence
    deleteSentence(sentence: any): void {
        // Ask for confirmation before deleting the sentence
        if (confirm('Are you sure you want to delete this sentence?')) {
            // Call the ApiService to delete the sentence
            this.apiService.deleteSentence(sentence._id).subscribe(() => {
                // Trigger a refresh in the parent component after deletion
                this.sentenceDeleted.emit()
            })
        }
    }
}
