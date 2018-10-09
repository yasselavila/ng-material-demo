import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedModule } from '../../shared.module';

const API_URL: string = environment.api.baseUrl;

@Injectable({ providedIn: SharedModule })
export class ApiService {
  public constructor(private http: HttpClient) {}

  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${API_URL}/${path}`);
  }
}
