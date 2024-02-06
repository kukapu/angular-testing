import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  counter: number = 0;

  constructor() { }

  incrementBy( value: number ) {
    this.counter += value;
    // TODO: los logs se pueden ver en los test
    // console.log({ newValue: this.counter });
  }
}
