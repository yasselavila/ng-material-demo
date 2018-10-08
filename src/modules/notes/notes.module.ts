import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotesComponent } from './notes.component';
import { NOTES_ROUTES } from './notes.routes';

@NgModule({
  imports: [RouterModule.forChild(NOTES_ROUTES), SharedModule],
  entryComponents: [NotesComponent],
  declarations: [NotesComponent]
})
export class NotesModule {}
