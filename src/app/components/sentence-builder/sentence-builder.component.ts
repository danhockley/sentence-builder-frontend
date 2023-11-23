import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-sentence-builder',
    templateUrl: './sentence-builder.component.html',
    styleUrls: ['./sentence-builder.component.scss'],
})
export class SentenceBuilderComponent {
    constructedSentence: string = ''

    constructor(private apiService: ApiService) {}

    onWordSelected(selectedWord: string): void {
        this.constructedSentence += selectedWord + ' '
    }

    onSentenceSubmit(): void {
        if (this.constructedSentence.trim() !== '') {
            this.apiService
                .submitSentence(this.constructedSentence.trim())
                .subscribe(() => {
                    // Optionally, perform any additional actions after submitting the sentence
                    this.constructedSentence = '' // Clear the constructed sentence
                })
        }
    }
}
