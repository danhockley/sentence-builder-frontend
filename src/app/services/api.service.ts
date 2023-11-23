import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, tap } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'https://tasty-gold-gecko.cyclic.app'

    constructor(private http: HttpClient) {}

    getWordsByType(wordType: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/words/${wordType}`)
    }

    getWordTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/words/types`).pipe(
            tap(types => console.log('Received Word Types:', types)),
            catchError(error => {
                console.error('Error fetching word types:', error)
                return []
            }),
        )
    }

    submitSentence(sentence: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/sentences`, { sentence })
    }

    getAllSentences(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/sentences`)
    }

    updateSentence(id: string, sentence: string[]): Observable<any> {
        return this.http.put(`${this.apiUrl}/sentences/${id}`, { sentence })
    }

    deleteSentence(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/sentences/${id}`)
    }
}
