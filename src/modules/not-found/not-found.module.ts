import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundComponent } from './not-found.component';
import { NOT_FOUND_ROUTES } from './not-found.routes';

@NgModule({
  imports: [RouterModule.forChild(NOT_FOUND_ROUTES), SharedModule],
  entryComponents: [NotFoundComponent],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
