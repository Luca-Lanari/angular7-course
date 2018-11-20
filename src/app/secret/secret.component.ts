import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  secret = '';
  array_count = [];
  count = 0;
  
  constructor() {
  }

  ngOnInit() {
  }

  onClickButton() {
    this.array_count.push(this.count += 1);
    this.secret = (this.secret === '') ? 'Secret Password = tuna' : '';
  }

  getColor(i) {
    if (i > 4) return 'blue';
  }

}
