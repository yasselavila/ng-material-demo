import { Injectable } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ApiService } from '../api/api.service';

@Injectable({ providedIn: SharedModule })
export class NotesService {
  public constructor(private apiService: ApiService) {}

  public findAll(): any[] {
    //
    return [];
  }
}
