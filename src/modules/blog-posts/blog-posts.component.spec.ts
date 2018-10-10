import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { BlogPostsComponent } from './blog-posts.component';

describe('Module: Blog-posts / Component: Blog-posts', () => {
  let fixture: ComponentFixture<BlogPostsComponent>;
  let cmp: BlogPostsComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [BlogPostsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
