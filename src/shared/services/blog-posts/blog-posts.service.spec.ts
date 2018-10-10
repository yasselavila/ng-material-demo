import { async, TestBed } from '@angular/core/testing';
import { BlogPostsService } from './blog-posts.service';

describe('Service: Blog-posts', () => {
  let service: BlogPostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BlogPostsService]
    });
  }));

  beforeEach(() => {
    service = null; // TODO
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
