import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SentenceState } from '../state/sentence.state'

// Feature selector for the sentence state
export const selectSentenceState =
    createFeatureSelector<SentenceState>('sentence')

// Selector for the constructed sentence
export const getConstructedSentence = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.constructedSentence,
)

// Selector for word types
export const getWordTypes = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.wordTypes,
)

// Selector for word list
export const getWordList = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.wordList,
)

// Selector for all submitted sentences
export const getAllSentences = createSelector(
    selectSentenceState,
    (state: SentenceState) => state.submittedSentences,
)

// Export the entire state for type safety
export interface State {
    sentence: SentenceState
}
