import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  title='Username and Password';
  model:any={};

  //Login method
login(){
console.log('login method called');

//Printing model values
console.log(this.model);

}

}

