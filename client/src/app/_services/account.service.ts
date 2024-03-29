import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

//Decorator or Attribute
//here AccountService is service class since it is having decorator as @Injectable
//If @Injectable decorator not present at above class AccountService then this is your plain class
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //Adding one property or variable
  baseUrl='https://localhost:7293/api/'

   //using http variable as HttpClient to make HttpRequest call 
  //So here we are injecting this HttpClient as a service in Constructor 
  //So that we can use this variable ie http
  //For eg  this.http.get('https://localhost:7293/api/users').subscribe(res=>{
  constructor(private http:HttpClient) {
    
  }

getUsers(){

  //this.http.get('https://localhost:7293/api/students')
   //this.http.get('https://localhost:7293/api/employees')
    //this.http.get('https://localhost:7293/api/users')
    //this will call server side url(api endpoint)
  return this.http.get(this.baseUrl + 'users');
}

//creating login method with parameter model - user name and password
//and call server side login method
login(model:any){
  return this.http.post(this.baseUrl+ 'account/login',model).pipe(
    map((response:any) =>{
      //printing the server side response

      console.log(response);
      //saving this response-(data) into variable const user
      const user=response; 
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
      }
    })
  )
}

logout(){
  localStorage.removeItem('user');
  
  }


}

