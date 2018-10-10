import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PagesComponent
  }
];
