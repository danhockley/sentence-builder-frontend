import { createAction, props } from '@ngrx/store'

export const setConstructedSentence = createAction(
    '[Sentence] Set Constructed Sentence',
    props<{ sentence: string }>(),
)

export const submitSentence = createAction('[Sentence] Submit Sentence')

export const loadSentences = createAction('[Sentence] Load Sentences')

export const loadSentencesSuccess = createAction(
    '[Sentence] Load Sentences Success',
    props<{ sentences: any[] }>(),
)

export const loadSentencesFailure = createAction(
    '[Sentence] Load Sentences Failure',
    props<{ error: any }>(),
)

export const deleteSentence = createAction(
    '[Sentence] Delete Sentence',
    props<{ id: string }>(),
)

export const successfulSubmission = createAction(
    '[Sentence] Successful Submission',
    props<{ sentences: any[] }>(),
)

export const errorSubmission = createAction(
    '[Sentence] Error Submission',
    props<{ error: any }>(),
)

export const fetchWordTypes = createAction('[Sentence] Fetch Word Types')

export const fetchWordTypesSuccess = createAction(
    '[Sentence] Fetch Word Types Success',
    props<{ types: string[] }>(),
)

export const fetchWordTypesFailure = createAction(
    '[Sentence] Fetch Word Types Failure',
    props<{ error: any }>(),
)

export const fetchWordList = createAction(
    '[Sentence] Fetch Word List',
    props<{ category: string }>(),
)

export const fetchWordListSuccess = createAction(
    '[Sentence] Fetch Word List Success',
    props<{ words: string[] }>(),
)

export const fetchWordListFailure = createAction(
    '[Sentence] Fetch Word List Failure',
    props<{ error: any }>(),
)
