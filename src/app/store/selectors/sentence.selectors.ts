import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SentenceState } from '../state/sentence.state'

// Create a feature selector for the sentence state
export const selectSentenceState =
    createFeatureSelector<SentenceState>('sentence')

// Create selectors to get specific pieces of state
export const getConstructedSentence = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.constructedSentence,
)

// Add selectors for word types and word list
export const getWordTypes = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.wordTypes,
)

export const getWordList = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.wordList,
)

// Add a selector to get all sentences
export const getAllSentences = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.submittedSentences,
)

// Export the entire state for type safety
export interface State {
    sentence: SentenceState
}
