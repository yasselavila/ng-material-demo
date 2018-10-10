import { DataSource as CdkDataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';
import { DataSource, ListOptions } from '../../services';

export class DataSourceHandler extends CdkDataSource<any> {
  private ds: DataSource<any>;
  private connected: boolean = false;

  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  public constructor(private paginator: MatPaginator, private sort: MatSort, ds?: DataSource<any>) {
    super();

    if (ds) {
      this.setDataSource(ds);
    }
  }

  public setDataSource(ds: DataSource<any>): void {
    this.ds = ds;

    if (this.connected) {
      this.loadData();
    }
  }

  public connect(): Observable<any[]> {
    this.connected = true;
    this.paginator.page.subscribe((pageIndex: number) => this.loadData(pageIndex));

    return this.dataSubject.asObservable();
  }

  public disconnect(): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

  public loadData(pageIndex: number = 0): void {
    this.loadingSubject.next(true);

    const options: ListOptions = {
      pageNumber: pageIndex + 1
    };

    this.ds
      .findAll(options)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)),
        take(1)
      )
      .subscribe((res: any) => {
        this.paginator.length = res.meta.totalItemCount;
        this.paginator.pageIndex = res.meta.currentPage - 1;
        this.dataSubject.next(res.data);
      });
  }
}
