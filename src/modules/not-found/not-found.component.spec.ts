import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundComponent } from './not-found.component';

describe('Module: Not Found / Component: Not Found', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  let cmp: NotFoundComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      /* Tells the compiler not to error on unknown elements and attributes */
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, SharedModule],
      declarations: [NotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'Not Found';

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    expect(element.querySelector('h3').textContent).toContain(expectedTitle);
  });
});
