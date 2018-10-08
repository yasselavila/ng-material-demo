import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_MODULES } from '../modules';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root.routing';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RootRoutingModule,
    ...APP_MODULES
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class RootModule {}
