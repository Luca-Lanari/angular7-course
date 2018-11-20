import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';
  
  constructor() { }

  ngOnInit() {
  }

  onChangeUsername(event) {
    return <HTMLInputElement>(event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

}
