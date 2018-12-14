import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  @Input() number: number;
  
  constructor() { }

  ngOnInit() {
  }

}
