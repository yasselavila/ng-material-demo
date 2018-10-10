import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { PagesComponent } from './pages.component';

describe('Module: Pages / Component: Pages', () => {
  let fixture: ComponentFixture<PagesComponent>;
  let cmp: PagesComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [PagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
