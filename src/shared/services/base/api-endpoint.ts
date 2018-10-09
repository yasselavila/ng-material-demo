import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedModule } from '../../shared.module';

const API_URL: string = environment.api.baseUrl;

@Injectable({ providedIn: SharedModule })
export class ApiEndpoint<T> {
  protected endpoint: string = '/';

  public constructor(private http: HttpClient) {}

  protected url(path: string = ''): string {
    const ret: string = `${API_URL}/${this.endpoint}/${path}`;
    return ret.replace(/\/+/g, '/').replace(/\/$/, '');
  }

  protected getHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Append authoriration if required!
    // headers.set('Authorizaztion', ...);

    return headers;
  }

  // TODO
  protected get(path: string): Observable<T> {
    return this.http.get<T>(`${API_URL}/${path}`, {
      headers: this.getHeaders()
    });
  }

  public create(data: T): Observable<T> {
    return this.http.post<T>(this.url(), data, {
      headers: this.getHeaders()
    });
  }
}
