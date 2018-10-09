import { Component } from '@angular/core';
import { NotesService, TableColumns } from '../../shared';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public tableColumns: TableColumns = {
    title: 'Title',
    content: 'Content'
  };

  public constructor(public notesService: NotesService) {}
}
