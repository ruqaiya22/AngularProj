import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  title='Username and Password';
  model:any={};
  constructor(private account:AccountService){

  }

  //Login method
login(){
console.log('login method called');


//Printing model values
console.log(this.model);

}

}

