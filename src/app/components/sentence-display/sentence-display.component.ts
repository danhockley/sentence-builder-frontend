import { Component, Input, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-display',
    templateUrl: './sentence-display.component.html',
    styleUrls: ['./sentence-display.component.scss'],
})
export class SentenceDisplayComponent implements OnInit {
    @Input() constructedSentence: string = ''
    submittedSentences: any[] = []

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.refreshSentences()
    }

    submitSentence(): void {
        if (this.constructedSentence.trim() !== '') {
            this.apiService
                .submitSentence(this.constructedSentence)
                .subscribe(() => {
                    this.apiService.getAllSentences().subscribe(sentences => {
                        this.submittedSentences = sentences
                        this.constructedSentence = '' // Clear the constructed sentence
                    })
                })
        }
    }

    refreshSentences() {
        this.apiService.getAllSentences().subscribe(sentences => {
            this.submittedSentences = sentences
        })
    }

    // Function to edit a sentence
    editSentence(sentence: any): void {
        // Implement your edit logic here
        console.log('Editing sentence:', sentence)
    }

    // Function to delete a sentence
    deleteSentence(sentence: any): void {
        // Implement your delete logic here
        console.log('Deleting sentence:', sentence)
    }
}
