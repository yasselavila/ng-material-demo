import { async, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: Api', () => {
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  }));

  beforeEach(() => {
    service = null; // TODO
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
