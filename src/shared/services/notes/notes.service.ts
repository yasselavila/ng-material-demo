import { Injectable } from '@angular/core';
import { Note } from '../../models';
import { SharedModule } from '../../shared.module';
import { ApiEndpoint } from '../base/api-endpoint';

@Injectable({ providedIn: SharedModule })
export class NotesService extends ApiEndpoint<Note> {
  protected endpoint: string = '/Notes';
}
