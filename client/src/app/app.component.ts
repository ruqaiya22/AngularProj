import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';

//Decorator or Attribute
//here AppComponent is component class since it is having decorator as @Component
//If @Component decorator not present at above class AppComponent then this is your plain class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Typescript class=variable or property + method + [Optional Constructor] here class name is AppComponent
  //variable or property
  title = 'display user list';
  users:any;
  //using http variable as HttpClient to make HttpRequest call 
  //So here we are injecting this HttpClient as a service in Constructor 
  //So that we can use this variable ie http
  //For eg  this.http.get('https://localhost:7293/api/users').subscribe(res=>{
    //here also using /injecting accountservice - private accountService:AccountService
  constructor(private http:HttpClient, private account:AccountService){
   
  }

  //method- event of angular-initialization
  ngOnInit(){
    //call get users method thar we defined on line no 23
    this.getUsers();
  }
  //method-getUsers
  getUsers(){
    
    //Here calling method from accountService getUsers
    this.account.getUsers().subscribe(res=>{
      console.log(res);
      //setting data from res(server data) to users variable that we created on line no 12
      this.users=res;
    },e=>{
      console.log(e);
    })
  }
}
