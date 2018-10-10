import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '../../services';
import { TableColumns } from './columns';
import { DataSourceHandler } from './datasource-handler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  public _columns: TableColumns;
  public _columnNames: string[];
  public _ds: DataSource<any>;
  public _dsHandler: DataSourceHandler;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  @ViewChild(MatSort)
  public sort: MatSort;

  @Input()
  public set dataSource(value: DataSource<any>) {
    this._ds = value;

    if (this._dsHandler) {
      this._dsHandler.setDataSource(value);
    }
  }

  public get dataSource(): DataSource<any> {
    return this._ds;
  }

  @Input()
  public set columns(value: TableColumns) {
    this._columns = value;
    this._columnNames = Object.keys(value);
  }

  public get columns(): TableColumns {
    return this._columns;
  }

  public get _columnsToDisplay(): string[] {
    return [...this._columnNames, '_crud_controls_'];
  }

  public ngOnInit(): void {
    this._dsHandler = new DataSourceHandler(this.paginator, this.sort, this._ds);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this._dsHandler.loadData());
  }

  public refresh(): void {
    this._dsHandler.loadData();
  }

  public onUpdate(id: string): void {
    // this._ds.delete(id).subscribe(() => console.log('Deleted: ', id));
  }

  public onDelete(id: string): void {
    this._ds.delete(id).subscribe(() => console.log('Deleted: ', id));
  }
}
