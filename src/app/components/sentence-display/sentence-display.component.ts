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

    submitSentence(): void {
        this.submitSentenceClicked.emit()
    }
}
