import { Routes } from '@angular/router';
import { BlogPostsComponent } from './blog-posts.component';

export const BLOG_POSTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogPostsComponent
  }
];
