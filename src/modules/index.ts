import { NgModule, Type } from '@angular/core';
import { HomeModule } from './home';
import { NotFoundModule } from './not-found';

export {
  HomeModule,
  /* WARNING: Must be the last!!! */
  NotFoundModule
};

export const APP_MODULES: Type<NgModule>[] = [
  /* WARNING: Do not export lazy-loaded modules here!!! */
];
