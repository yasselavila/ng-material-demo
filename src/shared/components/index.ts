import { Component, Type } from '@angular/core';
import { CrudComponent, CrudFormComponent, FormField, FormFields } from './crud';
import { NotFoundComponent } from './not-found';
import { TableColumns, TableComponent } from './table';

export { TableComponent, CrudComponent, CrudFormComponent, NotFoundComponent };
export { FormFields, FormField, TableColumns };

export const SHARED_COMPONENTS: Type<Component | any>[] = [
  TableComponent,
  CrudComponent,
  CrudFormComponent,
  NotFoundComponent
];
