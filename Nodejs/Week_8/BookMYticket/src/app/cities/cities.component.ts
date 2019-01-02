import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities;
  TheaterDetails;
  movieDetails;
  selected_city;
  selected_movie;
  selected_theater;
  cost_per_ticket:number;
  tickets:number;
  username:string;
  email:string;
  phone:number;
  Total_Amount:number;
  show_time:string;
  ticketDetails;
  Available_seats;
  date;
  proceed:boolean=true;//used to disable the button
  proceed2:boolean=true;//used to disable to button

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getCities().subscribe((res:any)=>{this.cities=res.data;
      console.log(this.cities);});
  }
  getDetails(city){
    this.selected_city=city;
    this.dataService.bookingDetails.city=city;
    this.dataService.getTheaters(`/theaters?city=${city}`).subscribe((res:any)=>{
      this.TheaterDetails=res.data;
      
      console.log(this.TheaterDetails);
    });
  }
  getMovieDetails(movieName,theater,cost,seats){
    this.cost_per_ticket=cost;
    this.selected_movie=movieName;
    this.selected_theater=theater;
    this.dataService.bookingDetails.movie_name=movieName;
    this.dataService.bookingDetails.Theater_name=theater;
    this.Available_seats=seats;
    this.dataService.getTheaters(`/movies?name=${movieName}`).subscribe((res:any)=>{
      this.movieDetails=res.data[0];
      console.log(this.movieDetails);
      console.log(this.movieDetails.name);
      console.log(this.cost_per_ticket);
    });
  }

  radioChangeHandler(event:any){
    this.tickets=event.target.value;
    console.log(this.tickets);
    this.dataService.bookingDetails.No_of_tickets=this.tickets;
    this.proceed2=false;
  }
  showTime(event:any){
    this.show_time=event.target.value;
    console.log(this.show_time);
    this.dataService.bookingDetails.show_time=this.show_time;
    this.proceed=false;
  }
  onBooking(){
      this.Total_Amount=this.cost_per_ticket*this.tickets;
      this.dataService.bookingDetails.username=this.username;
      this.dataService.bookingDetails.email=this.email;
      this.dataService.bookingDetails.phone=this.phone;
      this.dataService.bookingDetails.Amount_paid=this.Total_Amount;
      this.dataService.bookingDetails.show_date=this.date;
      this.dataService.onBook(this.dataService.bookingDetails).subscribe((res:any)=>{
      this.ticketDetails=res;
      console.log(res);
     
    });
    this.dataService.makeChanges.Theater_name=this.dataService.bookingDetails.Theater_name;
    this.dataService.makeChanges.available=this.Available_seats-this.dataService.bookingDetails.No_of_tickets;
    console.log(this.dataService.makeChanges.available);
    alert("Successfully booked your ticket(s)");
   
  }
  onClose(){
    this.dataService.blockSeats(this.dataService.makeChanges).subscribe((res)=>{
      console.log(res);
    });
    setTimeout(()=>{
      this.router.navigate(['/exit']);
    },1000);
  }

}