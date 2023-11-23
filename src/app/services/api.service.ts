import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, tap } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    // API URL obtained from the environment configuration
    private apiUrl = environment.api.serverUrl

    // Constructor to inject the HttpClient service
    constructor(private http: HttpClient) {}

    // Method to get words based on the specified word type
    getWordsByType(wordType: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/words/${wordType}`)
    }

    // Method to get the available word types
    getWordTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/words/types`).pipe(
            // Log received word types to the console
            tap(types => console.log('Received Word Types:', types)),
            // Handle errors and return an empty array
            catchError(error => {
                console.error('Error fetching word types:', error)
                return []
            }),
        )
    }

    // Method to submit a new sentence to the backend
    submitSentence(sentence: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/sentences`, { sentence })
    }

    // Method to get all submitted sentences from the backend
    getAllSentences(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/sentences`)
    }

    // Method to delete a sentence from the backend
    deleteSentence(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/sentences/${id}`)
    }
}
