import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AppRoutingModule} from './routing.module'
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { ErrorComponent } from './error/error.component';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { GuardService } from './guard.service';
import { ResolverService } from './resolver.service';
import { WinnersComponent } from './winners/winners.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
    TeamsComponent,
    TeamDetailsComponent,
    ErrorComponent,
    WinnersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [AppService,AuthService,GuardService,ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
