import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudFormComponent } from './form.component';

describe('Module: Shared / Component: CRUD Form', () => {
  let fixture: ComponentFixture<CrudFormComponent>;
  let cmp: CrudFormComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
