import { Component } from '@angular/core';
import { PagesService, TableColumns } from '../../shared';

@Component({
  selector: 'app-pages-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  public tableColumns: TableColumns = {
    title: 'Title',
    content: 'Content'
  };

  public constructor(public pagesService: PagesService) {}
}
