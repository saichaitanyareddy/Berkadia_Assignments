import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

interface Team{
  id:number;
  Name:string;
  Captain:string;
}
@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Team>{
  

  constructor(private teamDetails:AppService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Team>|Promise<Team>|Team{
    return this.teamDetails.getTeam(+route.params['id']);
  }
}
