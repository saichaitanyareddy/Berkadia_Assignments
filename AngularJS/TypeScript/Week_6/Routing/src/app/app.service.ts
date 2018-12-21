import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  scheduleDetails=[
    {Match_no:'1',Teams:'CSK vs MI',Date:'6/4/19',Time:'8:00pm',venue:'chennai'},
    {Match_no:'2',Teams:'RCB vs KXIP',Date:'7/4/19',Time:'4:00pm',venue:'mohali'},
    {Match_no:'3',Teams:'DD vs RR',Date:'7/4/19',Time:'8:00pm',venue:'New Delhi'},
    {Match_no:'4',Teams:'CSK vs RR',Date:'13/4/19',Time:'4:00pm',venue:'jaipur'},
    {Match_no:'5',Teams:'MI vs KXIP',Date:'13/4/19',Time:'8:00pm',venue:'mumbai'},
    {Match_no:'6',Teams:'SRH vs KKR',Date:'14/4/19',Time:'8:00pm',venue:'Hyderabad'},
    {Match_no:'7',Teams:'DD vs RCB',Date:'20/4/19',Time:'4:00pm',venue:'banglore'},
    {Match_no:'8',Teams:'SRH vs CSK',Date:'20/4/19',Time:'8:00pm',venue:'chennai'},
    {Match_no:'9',Teams:'CSK vs KKR',Date:'21/4/19',Time:'4:00pm',venue:'kolkota'},
    {Match_no:'10',Teams:'RCB vs MI',Date:'21/4/19',Time:'8:00pm',venue:'banglore'},
    {Match_no:'11',Teams:'SRH vs DD',Date:'27/4/19',Time:'8:00pm',venue:'New Delhi'},
    {Match_no:'12',Teams:'RCB vs KXIP',Date:'28/4/19',Time:'8:00pm',venue:'mohali'}
    
  ];
  teamsList=[
    {id:1,Name:'Chennai Super Kings',Captain:'M.S.Dhoni'},
    {id:2,Name:'Royal Challengers Banglore',Captain:'Virat Kohli'},
    {id:3,Name:'Mumbai Indians',Captain:'Rohit sharma'},
    {id:4,Name:'Sunrisers Hyderabad',Captain:'Kane Wiliamson'},
    {id:5,Name:'Delhi Daredevils',Captain:'Shreyas Iyer'},
    {id:6,Name:'Kolkata Knight Riders',Captain:'Dinesh Karthik'},
    {id:7,Name:'Rajasthan Royals',Captain:'Ajinkya Rahane'},
    {id:8,Name:'Kings XI Punjab',Captain:'Karun Nair'}
  ];
  getTeam(id:number){
    const Team=this.teamsList.find((s)=>{
      return s.id === id;
    });
    return Team;
  }
  winnersDetails=[
    {team:'Rajasthan Royals',year:2008},
    {team:'Deccan Chargers',year:2009},
    {team:'Chennai Super Kings',year:2010},
    {team:'Chennai Super Kings',year:2011},
    {team:'Kolkata Knight Riders',year:2012},
    {team:'Mumbai Indians',year:2013},
    {team:'Kolkata Knight Riders',year:2014},
    {team:'Mumbai Indians',year:2015},
    {team:'Sunrisers Hyderabad',year:2016},
    {team:'Mumbai Indians',year:2017},
    {team:'Chennai Super Kings',year:2018}
  ]


}
