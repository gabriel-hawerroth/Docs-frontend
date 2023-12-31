import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}general`;

  constructor(private http: HttpClient) {}

  getTotOfRecords(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/tot-records`);
  }
}
