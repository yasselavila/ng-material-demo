import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: '../modules/home/home.module#HomeModule'
  },
  {
    path: 'blog-posts',
    loadChildren: '../modules/blog-posts/blog-posts.module#BlogPostsModule'
  },
  {
    path: 'pages',
    loadChildren: '../modules/pages/pages.module#PagesModule'
  },
  /* WARNING: Must be the last!!! */
  {
    path: '**',
    loadChildren: '../modules/not-found/not-found.module#NotFoundModule'
  }
];

export const RootRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROOT_ROUTES, {
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled'
  // XXX: enableTracing: false,
  // XXX: preloadingStrategy: PreloadAllModules
});
