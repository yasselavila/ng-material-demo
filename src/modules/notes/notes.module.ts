import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { NotesComponent } from './notes.component';
import { NOTES_ROUTES } from './notes.routes';

@NgModule({
  imports: [RouterModule.forChild(NOTES_ROUTES), SharedModule],
  entryComponents: [NotesComponent],
  declarations: [NotesComponent, NotesFormComponent]
})
export class NotesModule {}
