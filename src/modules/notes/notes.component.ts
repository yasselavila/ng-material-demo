import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, NotesService } from '../../shared';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public data$: Observable<Note[]> = this.dataSource.getList();

  public constructor(public dataSource: NotesService) {}

  public create(): void {
    this.dataSource.create({ title: 'Example', content: 'Lola' }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.error('ERROR', err)
    );
  }
}
