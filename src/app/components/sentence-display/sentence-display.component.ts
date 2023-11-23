import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-display',
    templateUrl: './sentence-display.component.html',
    styleUrls: ['./sentence-display.component.scss'],
})
export class SentenceDisplayComponent implements OnInit {
    @Input() constructedSentence: string = ''
    submittedSentences: any[] = []

    @Output() onSentenceSubmit = new EventEmitter<void>()

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAllSentences().subscribe(sentences => {
            this.submittedSentences = sentences
        })
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
}
