export interface AppState {
    sentence: SentenceState
}

export interface SentenceState {
    constructedSentence: string
    wordTypes: string[]
    wordList: string[]
    submittedSentences: any[]
}
