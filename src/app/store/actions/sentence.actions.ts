import { createAction, props } from '@ngrx/store'

// Load sentences from the backend
export const loadSentences = createAction('[Sentence] Load Sentences')

// Submit the constructed sentence to the backend
export const submitSentence = createAction('[Sentence] Submit Sentence')

// Set the constructed sentence in the state
export const setConstructedSentence = createAction(
    '[Sentence] Set Constructed Sentence',
    props<{ sentence: string }>(),
)

// Clear the constructed sentence in the state
export const clearConstructedSentence = createAction(
    '[Sentence] Clear Constructed Sentence',
)

// Successfully load sentences from the backend
export const loadSentencesSuccess = createAction(
    '[Sentence] Load Sentences Success',
    props<{ sentences: any[] }>(),
)

// Handle failure to load sentences from the backend
export const loadSentencesFailure = createAction(
    '[Sentence] Load Sentences Failure',
    props<{ error: any }>(),
)

// Delete a sentence by ID
export const deleteSentence = createAction(
    '[Sentence] Delete Sentence',
    props<{ id: string }>(),
)

// Handle successful submission of a sentence
export const successfulSubmission = createAction(
    '[Sentence] Successful Submission',
    props<{ sentences: any[] }>(),
)

// Handle error during the submission of a sentence
export const errorSubmission = createAction(
    '[Sentence] Error Submission',
    props<{ error: any }>(),
)

// Fetch word types from the backend
export const fetchWordTypes = createAction('[Sentence] Fetch Word Types')

// Successfully fetch word types from the backend
export const fetchWordTypesSuccess = createAction(
    '[Sentence] Fetch Word Types Success',
    props<{ types: string[] }>(),
)

// Handle failure to fetch word types from the backend
export const fetchWordTypesFailure = createAction(
    '[Sentence] Fetch Word Types Failure',
    props<{ error: any }>(),
)

// Fetch word list based on the selected category
export const fetchWordList = createAction(
    '[Sentence] Fetch Word List',
    props<{ category: string }>(),
)

// Successfully fetch word list from the backend
export const fetchWordListSuccess = createAction(
    '[Sentence] Fetch Word List Success',
    props<{ words: string[] }>(),
)

// Handle failure to fetch word list from the backend
export const fetchWordListFailure = createAction(
    '[Sentence] Fetch Word List Failure',
    props<{ error: any }>(),
)
