import { async, TestBed } from '@angular/core/testing';
import { NotesService } from './notes.service';

describe('Service: Notes', () => {
  let service: NotesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [NotesService]
    });
  }));

  beforeEach(() => {
    service = null; // TODO
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
