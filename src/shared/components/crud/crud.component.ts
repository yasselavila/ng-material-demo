import { Component, HostBinding, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataSource } from '../../services';
import { TableColumns } from '../table';
import { FormFields } from './form/fields';
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
  public formFields: FormFields;

  public constructor(private dialogService: MatDialog) {}

  private displayDialog(model: any, callback: Function): void {
    const dialogRef: MatDialogRef<{}, any> = this.dialogService.open(CrudFormComponent, {
      width: '500px',
      data: {
        fields: this.formFields,
        model: model || {}
      }
    });

    dialogRef.afterClosed().subscribe((result: any | null) => {
      if (!result) {
        return;
      }

      console.log('Dialog result:', result);
      callback(result);
    });
  }

  public create(): void {
    this.displayDialog(null, (result) => {
      console.log('Create: ', result);
      // this.dataSource.create(result).subscribe((res: any) => console.log('Create: Done!'));
    });
  }

  public update(): void {
    this.displayDialog(null, (result) => {
      this.dataSource.create(result).subscribe((res: any) => console.log('Create: Done!'));
    });
  }
}
