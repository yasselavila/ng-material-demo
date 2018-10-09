import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { TableColumns } from '../table';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  @Input()
  public title: string;

  @Input()
  public tableColumns: TableColumns;

  @Input()
  public dataSource: string;

  @Input()
  public form: Form;

  public create(): void {
    //
  }
}
