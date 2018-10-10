import { Observable } from 'rxjs';

export interface ListOptions {
  sortOrder?: 'asc' | 'desc';
  pageNumber?: number;
  pageSize?: number;
}

export interface DataSource<T> {
  findAll(options?: ListOptions): Observable<T[]>;

  findOne(id: string): Observable<T>;

  create(data: T): Observable<T>;

  update(id: string, data: T): Observable<T>;

  delete(id: string): Observable<T>;
}
