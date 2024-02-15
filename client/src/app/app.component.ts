import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  users:any;
  constructor(private http:HttpClient){
   
  }
  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    this.http.get('https://localhost:7293/api/users').subscribe(res=>{
      this.users=res;
    },err=>{
      console.log(err);
    })
  }
}
