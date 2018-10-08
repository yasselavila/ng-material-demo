import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { NotesComponent } from './notes.component';

describe('Module: Notes / Component: Notes', () => {
  let fixture: ComponentFixture<NotesComponent>;
  let cmp: NotesComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [NotesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'Welcome!';

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    expect(element.querySelector('h2').textContent).toContain(expectedTitle);
  });
});
