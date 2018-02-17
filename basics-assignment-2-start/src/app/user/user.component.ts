import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string='';
  username2: string='';

  buttonResult: string='';
  buttonResult2: string='';

  constructor() { }

  ngOnInit() {
  }

  isEmptyUsername(){
    // return this.username.length == 0;
    //or
    return this.username === '';
  }

  updateValue(event: any){
    console.log(event);
    this.buttonResult = this.username;
  }

  updateOutputValue(event: any){
    console.log(event);
    this.buttonResult2 = this.username2;
  }

  reset(){
    this.username2 = '';
    this.buttonResult2 = '';
  }
}
