import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'https://tasty-gold-gecko.cyclic.app'

    constructor(private http: HttpClient) {}

    getWordsByType(wordType: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/words/${wordType}`)
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
