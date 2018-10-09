import { Component, Type } from '@angular/core';
import { CrudComponent } from './crud';
import { NotFoundComponent } from './not-found';
import { TableColumns, TableComponent } from './table';

export { TableComponent, CrudComponent, NotFoundComponent };
export { TableColumns };

export const SHARED_COMPONENTS: Type<Component | any>[] = [
  TableComponent,
  CrudComponent,
  NotFoundComponent
];
