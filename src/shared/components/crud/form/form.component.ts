import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-crud-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class CrudFormComponent {
  @Input()
  public form: Form;

  public constructor(private dialogRef: MatDialogRef<any>) {}

  public closeDialog(data: any = null): void {
    this.dialogRef.close(data);
  }
}
