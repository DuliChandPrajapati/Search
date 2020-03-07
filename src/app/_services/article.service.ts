
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Article } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Article[]>(`${environment.apiUrl}/articlelist`);
    }

    getById(id: number) {
        return this.http.get<Article>(`${environment.apiUrl}/article/${id}`);
    }
}