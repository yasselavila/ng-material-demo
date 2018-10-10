import { Injectable } from '@angular/core';
import { BlogPost } from '../../models';
import { SharedModule } from '../../shared.module';
import { ApiEndpoint } from '../base/api-endpoint';

@Injectable({ providedIn: SharedModule })
export class PagesService extends ApiEndpoint<BlogPost> {
  protected endpoint: string = '/pages';
}
