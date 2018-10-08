import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';

describe('Component: Root', () => {
  let fixture: ComponentFixture<RootComponent>;
  let cmp: RootComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RootComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'NgMaterial Demo';

  it('should create the app', async(() => {
    expect(cmp).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(element.querySelector('h1').textContent).toContain(expectedTitle);
  }));
});
