import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES), SharedModule],
  entryComponents: [PagesComponent],
  declarations: [PagesComponent]
})
export class PagesModule {}
