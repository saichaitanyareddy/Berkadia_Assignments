import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }
  studentDetails=[
      {hallticket:'1234567890',name:'Sai',marks:'100',grade:'O',result:'Passed'},
      {hallticket:'4567890123',name:'Chaitanya',marks:'90',grade:'A',result:'Passed'},
      {hallticket:'7890123456',name:'Madhu',marks:'80',grade:'B',result:'Passed'},
      {hallticket:'3456789012',name:'Hari',marks:'95',grade:'O',result:'Passed'},
      {hallticket:'6789012345',name:'Vamsi',marks:'85',grade:'B',result:'Passed'},
      {hallticket:'8901234567',name:'Pradeep',marks:'80',grade:'B',result:'Passed'},
      {hallticket:'9012345678',name:'Pushpak',marks:'90',grade:'A',result:'Passed'},
      {hallticket:'2345678901',name:'Srikanth',marks:'95',grade:'O',result:'Passed'},          
  ];
}
