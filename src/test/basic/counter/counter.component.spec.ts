import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('incrementBy should increment the counter by the given value', () => {
    component.incrementBy(5);
    expect(component.counter).toBe(5);
  });

  test('click button sholud increment and decrement by 1', () => {
    const button = compiled.querySelectorAll('button');
    button[0].click();
    expect(component.counter).toBe(1);
    button[1].click();
    expect(component.counter).toBe(0);
  })

  test('modify counter should upload h1', () => {
    component.incrementBy(5)
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');

    expect(h1?.textContent).toContain('5');
  })

});
