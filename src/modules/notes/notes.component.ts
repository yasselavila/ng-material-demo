import { Component } from '@angular/core';
import { NotesService } from '../../shared';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public constructor(public dataSource: NotesService) {}
}
