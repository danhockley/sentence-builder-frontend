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

export const sentenceReducer = createReducer(
    initialState,
    on(SentenceActions.setConstructedSentence, (state, { sentence }) => ({
        ...state,
        constructedSentence: sentence,
    })),
    on(SentenceActions.fetchWordTypesSuccess, (state, { types }) => ({
        ...state,
        wordTypes: types,
    })),
    on(SentenceActions.fetchWordListSuccess, (state, { words }) => ({
        ...state,
        wordList: words,
    })),
    on(SentenceActions.loadSentencesSuccess, (state, { sentences }) => ({
        ...state,
        submittedSentences: sentences,
    })),
    on(SentenceActions.deleteSentence, (state, { id }) => ({
        ...state,
        submittedSentences: state.submittedSentences.filter(
            sentence => sentence._id !== id,
        ),
    })),
)

export const getSubmittedSentences = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.submittedSentences,
)

export function reducer(state: SentenceState | undefined, action: Action) {
    return sentenceReducer(state, action)
}
