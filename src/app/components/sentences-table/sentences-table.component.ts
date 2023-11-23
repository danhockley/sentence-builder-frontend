import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentences-table',
    templateUrl: './sentences-table.component.html',
    styleUrls: ['./sentences-table.component.scss'],
})
export class SentencesTableComponent {
    @Input() submittedSentences: any[] = []
    @Output() sentenceUpdated = new EventEmitter()
    @Output() sentenceDeleted = new EventEmitter()

    constructor(private apiService: ApiService) {}

    editSentence(sentence: any) {
        // Implement your edit logic if needed
    }

    deleteSentence(sentence: any) {
        if (confirm('Are you sure you want to delete this sentence?')) {
            this.apiService.deleteSentence(sentence._id).subscribe(() => {
                this.sentenceDeleted.emit() // Trigger a refresh in the parent component
            })
        }
    }
}
