import { Action, createReducer, on } from '@ngrx/store'
import * as SentenceActions from '../actions/sentence.actions'

export interface SentenceState {
    constructedSentence: string
    wordTypes: string[]
    wordList: string[]
}

export const initialState: SentenceState = {
    constructedSentence: '',
    wordTypes: [],
    wordList: [],
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
)

export function reducer(state: SentenceState | undefined, action: Action) {
    return sentenceReducer(state, action)
}
