import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES), SharedModule],
  entryComponents: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
