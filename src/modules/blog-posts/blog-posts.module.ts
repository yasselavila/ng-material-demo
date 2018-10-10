import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BlogPostsComponent } from './blog-posts.component';
import { BLOG_POSTS_ROUTES } from './blog-posts.routes';

@NgModule({
  imports: [RouterModule.forChild(BLOG_POSTS_ROUTES), SharedModule],
  entryComponents: [BlogPostsComponent],
  declarations: [BlogPostsComponent]
})
export class BlogPostsModule {}
