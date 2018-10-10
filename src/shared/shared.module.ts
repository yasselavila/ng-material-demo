import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SHARED_COMPONENTS } from './components';
import { MATERIAL_MODULES } from './material-modules';

/* Do not specify providers for modules that might be imported by a lazy loaded module */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS
  ],
  declarations: [...SHARED_COMPONENTS],
  entryComponents: [...SHARED_COMPONENTS]
})
export class SharedModule {}
