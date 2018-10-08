import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

describe('Module: Home / Component: Home', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let cmp: HomeComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
