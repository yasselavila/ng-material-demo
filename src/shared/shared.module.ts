import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_COMPONENTS } from './components';

/* Do not specify providers for modules that might be imported by a lazy loaded module */

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CommonModule, RouterModule, ...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS],
  entryComponents: [...SHARED_COMPONENTS]
})
export class SharedModule {}
