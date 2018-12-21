import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { ErrorComponent } from './error/error.component';
import { GuardService } from './guard.service';
import { ResolverService } from './resolver.service';
import { WinnersComponent } from './winners/winners.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'schedule',component:ScheduleComponent},
    {path:'teams',component:TeamsComponent, children:[
      {path:':id',component:TeamDetailsComponent,resolve:{Team:ResolverService}}
    ]},
    {path: 'gallery',loadChildren: './gallery/gallery.module#GalleryModule'},
    {path:'winners',canActivate:[GuardService],component:WinnersComponent},
    {path:'error',component:ErrorComponent},
    {path:'**',redirectTo:'/error'}
  ];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}