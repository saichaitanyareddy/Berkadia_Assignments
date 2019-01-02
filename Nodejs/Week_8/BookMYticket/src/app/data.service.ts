import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  bookingDetails={
    username: "",
    email:"",
    phone:0,
    movie_name:"",
    show_date:1/1/2019,
    show_time:"",
    No_of_tickets:0,
    Amount_paid:0,
    Theater_name:"",
    city:""
  };
  makeChanges={
    available:0,
    Theater_name:""
  };
  result:any;

  constructor(private http: HttpClient) { }

  getCities(){
    return this.http.get("/cities");
  }
  getTheaters(url:string){
    return this.http.get(url);
  }
  getMovie(url:string){
    return this.http.get(url);
  }
  onBook(booking){
   return this.http.post("/book",booking);
  }
  getTicket(){
    return this.http.get("/ticket");
  }
  blockSeats(makeChanges){
    return this.http.put("/blockseats",makeChanges);
  }

}