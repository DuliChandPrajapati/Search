
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Person } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class PersonService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Person[]>(`${environment.apiUrl}/personlist`);
    }

    getById(id: number) {
        return this.http.get<Person>(`${environment.apiUrl}/person/${id}`);
    }
}