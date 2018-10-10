import { Component } from '@angular/core';
import { BlogPostsService, TableColumns } from '../../shared';

@Component({
  selector: 'app-blog-posts-page',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent {
  public tableColumns: TableColumns = {
    title: 'Title',
    content: 'Content'
  };

  public constructor(public blogPostsService: BlogPostsService) {}
}
