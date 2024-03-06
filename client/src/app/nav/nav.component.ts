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
  loggedIn:boolean;

  constructor(private account:AccountService){

  }

  //Login method
login(){
console.log('login method called');


//Printing model values - username and password
console.log(this.model);

this.account.login(this.model).subscribe( res =>{
 // console.log(res);
  this.loggedIn=true;
  console.log(this.loggedIn);
  
},e => {
  console.log(e);
})

}
logout(){
this.loggedIn=false;
this.account.logout();

}

}

