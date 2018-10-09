import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { NotesFormComponent } from './notes-form.component';

describe('Module: Notes / Component: Notes-form', () => {
  let fixture: ComponentFixture<NotesFormComponent>;
  let cmp: NotesFormComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [NotesFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFormComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
