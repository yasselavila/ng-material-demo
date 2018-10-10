import { NgModule, Type } from '@angular/core';
import { BlogPostsModule } from './blog-posts';
import { HomeModule } from './home';
import { NotFoundModule } from './not-found';
import { PagesModule } from './pages';

export {
  HomeModule,
  PagesModule,
  BlogPostsModule,
  /* WARNING: Must be the last!!! */
  NotFoundModule
};

export const APP_MODULES: Type<NgModule>[] = [
  /* WARNING: Do not export lazy-loaded modules here!!! */
];
