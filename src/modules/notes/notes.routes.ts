import { Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

export const NOTES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotesComponent
  }
];
