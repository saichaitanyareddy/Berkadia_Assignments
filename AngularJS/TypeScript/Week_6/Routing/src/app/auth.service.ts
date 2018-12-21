import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  isAuthenticated(){
    const promise=new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },800);
      }
    );
    return promise;
  }
  constructor() { }
  onSubscribe(){
    this.loggedIn=true;
  }
  onUnsubscribe(){
    this.loggedIn=false;
  }
}
