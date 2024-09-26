import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Condidat } from '../models/condidat.model';

@Injectable({
    providedIn: 'root'
})
export class CondidatService {
    
    private apiUrl = 'http://localhost:3000/api/items';

    constructor( private http: HttpClient) { }

    /**
     * Retrieves the list of candidates from the backend API.
     * 
     * @returns {Observable<Condidat[]>} An observable containing an array of candidates.
     */
    getCondidats(): Observable<Condidat[]> {
        return this.http.get<Condidat[]>(this.apiUrl);
    }
    
    /**
     * Adds a new candidate to the backend API.
     * 
     * @param {Condidat} condidat - The candidate to be added.
     * @returns {Observable<Condidat>} An observable containing the newly added candidate.
     */
    addCondidat(condidat: Condidat): Observable<Condidat> {
        return this.http.post<Condidat>(this.apiUrl, condidat);
    }
}
