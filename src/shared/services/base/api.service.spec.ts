import { async, TestBed } from '@angular/core/testing';
import { ApiEndpoint } from './api-endpoint';

describe('Base Service: Api-Endpoint', () => {
  let service: ApiEndpoint;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ApiEndpoint]
    });
  }));

  beforeEach(() => {
    service = null; // TODO
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
