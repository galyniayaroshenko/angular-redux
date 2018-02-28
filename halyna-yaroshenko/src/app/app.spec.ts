import { TestBed, async } from '@angular/core/testing';
import { App } from './app';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain('Welcome!');
  }));
});
