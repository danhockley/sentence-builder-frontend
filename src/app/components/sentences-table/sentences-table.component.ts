import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as SentenceActions from '../../store/actions/sentence.actions'

@Component({
    selector: 'app-sentences-table',
    templateUrl: './sentences-table.component.html',
    styleUrls: ['./sentences-table.component.scss'],
})
export class SentencesTableComponent implements OnInit {
    @Input() submittedSentences: any[] = []
    @Output() sentenceDeleted = new EventEmitter()

    constructor(private store: Store) {}

    ngOnInit(): void {
        // Load sentences when the component initializes
        this.store.dispatch(SentenceActions.loadSentences())
    }

    deleteSentence(sentence: any): void {
        // Prompt user for confirmation and dispatch delete action
        if (confirm('Are you sure you want to delete this sentence?')) {
            this.store.dispatch(
                SentenceActions.deleteSentence({ id: sentence._id }),
            )
        }
    }
}
