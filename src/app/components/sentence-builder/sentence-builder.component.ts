import { Component } from '@angular/core'

@Component({
    selector: 'app-sentence-builder',
    templateUrl: './sentence-builder.component.html',
    styleUrls: ['./sentence-builder.component.scss'],
})
export class SentenceBuilderComponent {
    // Define methods and properties that will be used in the template
    constructedSentence: string = ''

    onWordSelected(selectedWord: string): void {
        console.log('Word selected:', selectedWord)
        this.constructedSentence += selectedWord + ' '
        console.log('Constructed Sentence:', this.constructedSentence)
    }

    onSentenceSubmit(): void {
        console.log('Sentence submitted:', this.constructedSentence)
        // Implement logic to send the sentence to the API or perform other actions
    }
}
