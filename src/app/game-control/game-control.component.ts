import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() multipleFired = new EventEmitter<number>();
  interval;
  multipleInteval;
  lastNumber = 0;
  lastNumberMultiple = 0;

  constructor() { }

  ngOnInit() { }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  onStart2xGame() {
    this.multipleInteval = setInterval(() => {
      this.multipleFired.emit(this.lastNumberMultiple + 1);
      this.lastNumberMultiple++;
    }, 1000);
  }

  onPause2xGame() {
    clearInterval(this.multipleInteval);
  }

}
