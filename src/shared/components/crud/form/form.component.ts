import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormField, FormFields } from './fields';

@Component({
  selector: 'app-crud-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class CrudFormComponent {
  public _formGroup: FormGroup = new FormGroup({});
  public _formlyFields: any;
  public _model: any;

  public constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any
  ) {
    this._model = dialogData.model || {};
    this._formlyFields = this.createFormlyFields(dialogData.fields || {});
  }

  public closeDialog(data: any = null): void {
    this.dialogRef.close(data);
  }

  public onSave(): void {
    if (this._formGroup.valid) {
      this.closeDialog(this._model);
    }
  }

  private createFormlyFields(fields: FormFields): FormlyFieldConfig[] {
    const ret: FormlyFieldConfig[] = [];

    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        ret.push(this.toFormlyField(key, fields[key]));
      }
    }

    return ret;
  }

  private toFormlyField(key: string, field: FormField | string): FormlyFieldConfig {
    let type: string, label: string;
    let required: boolean = true;

    if ('string' === typeof field) {
      label = field;
      type = 'input';
    } else {
      label = field.label || key;
      type = field.type || 'input';

      if ('required' in field) {
        required = !!field.required;
      }
    }

    return {
      key: key,
      type,
      templateOptions: {
        label,
        required
      }
    };
  }
}
