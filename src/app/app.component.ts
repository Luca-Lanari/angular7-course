import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(eventLastNumber: number) {
    if (eventLastNumber % 2 === 0) {
      this.evenNumbers.push(eventLastNumber);
    } else {
      this.oddNumbers.push(eventLastNumber);
    }
  }

}

