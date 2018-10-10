import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SHARED_COMPONENTS } from './components';
import { MATERIAL_MODULES } from './material-modules';

/* Do not specify providers for modules that might be imported by a lazy loaded module */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    PerfectScrollbarModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    PerfectScrollbarModule,
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS
  ],
  declarations: [...SHARED_COMPONENTS],
  entryComponents: [...SHARED_COMPONENTS]
})
export class SharedModule {}
