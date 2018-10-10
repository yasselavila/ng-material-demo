import { Component } from '@angular/core';
import { BlogPostsService, FormFields, TableColumns } from '../../shared';

@Component({
  selector: 'app-blog-posts-page',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent {
  public tableColumns: TableColumns = {
    title: 'Title',
    lead: 'Lead',
    content: 'Content'
  };

  public formFields: FormFields = {
    title: 'Title',
    lead: { label: 'Lead', type: 'textarea', required: false },
    content: { label: 'Content', type: 'textarea' }
  };

  public constructor(public blogPostsService: BlogPostsService) {}
}
