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

    private refreshSentences(): void {
        this.apiService.getAllSentences().subscribe(sentences => {
            this.submittedSentences = sentences
            console.log(sentences)
            console.log(sentences[0]['words'][0])
        })
        console.log(this.submittedSentences)
    }
}
