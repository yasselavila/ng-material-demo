import { Component, HostBinding, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataSource } from '../../services';
import { TableColumns } from '../table';
import { CrudFormComponent } from './form/form.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  @HostBinding('title')
  public titleBinding: string = '';

  @Input()
  public title: string;

  @Input()
  public tableColumns: TableColumns;

  @Input()
  public dataSource: DataSource<any>;

  @Input()
  public form: Form;

  public constructor(private dialogService: MatDialog) {}

  public create(): void {
    const dialogRef: MatDialogRef<{}, any> = this.dialogService.open(CrudFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: any | null) => {
      if (!result) {
        return;
      }

      console.log('Dialog result:', result);
      this.dataSource.create(result).subscribe((res: any) => console.log('Create: Done!'));
    });
  }
}
