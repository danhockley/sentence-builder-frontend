import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-sentence-display',
    templateUrl: './sentence-display.component.html',
    styleUrls: ['./sentence-display.component.scss'],
})
export class SentenceDisplayComponent {
    @Input() constructedSentence: string = ''
    @Output() submitSentenceClicked = new EventEmitter<void>()
    submittedSentences: any[] = []

    // Emits event to parent (sentence builder) when the "Submit Sentence" button is clicked.
    submitSentence(): void {
        this.submitSentenceClicked.emit()
    }
}
