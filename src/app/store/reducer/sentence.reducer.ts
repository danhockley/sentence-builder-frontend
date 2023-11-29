import { Action, createReducer, createSelector, on } from '@ngrx/store'
import * as SentenceActions from '../actions/sentence.actions'
import { selectSentenceState } from '../selectors/sentence.selectors'

export interface SentenceState {
    constructedSentence: string
    wordTypes: string[]
    wordList: string[]
    submittedSentences: any[]
}

export const initialState: SentenceState = {
    constructedSentence: '',
    wordTypes: [],
    wordList: [],
    submittedSentences: [],
}

// Reducer function managing the state of the sentence module
export const sentenceReducer = createReducer(
    initialState,
    // Set the constructed sentence in the state
    on(SentenceActions.setConstructedSentence, (state, { sentence }) => ({
        ...state,
        constructedSentence: sentence,
    })),
    // Clear the constructed sentence in the state
    on(SentenceActions.clearConstructedSentence, state => ({
        ...state,
        constructedSentence: '',
    })),
    // Update word types in the state on successful fetch
    on(SentenceActions.fetchWordTypesSuccess, (state, { types }) => ({
        ...state,
        wordTypes: types,
    })),
    // Update word list in the state on successful fetch
    on(SentenceActions.fetchWordListSuccess, (state, { words }) => ({
        ...state,
        wordList: words,
    })),
    // Update submitted sentences in the state on successful fetch
    on(SentenceActions.loadSentencesSuccess, (state, { sentences }) => ({
        ...state,
        submittedSentences: sentences,
    })),
    // Remove a sentence from the state on deletion
    on(SentenceActions.deleteSentence, (state, { id }) => ({
        ...state,
        submittedSentences: state.submittedSentences.filter(
            sentence => sentence._id !== id,
        ),
    })),
)

// Selector to retrieve the submitted sentences from the state
export const getSubmittedSentences = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.submittedSentences,
)

// Reducer function for the sentence module
export function reducer(state: SentenceState | undefined, action: Action) {
    return sentenceReducer(state, action)
}
