import { async, TestBed } from '@angular/core/testing';
import { PagesService } from './pages.service';

describe('Service: Pages', () => {
  let service: PagesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PagesService]
    });
  }));

  beforeEach(() => {
    service = null; // TODO
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
