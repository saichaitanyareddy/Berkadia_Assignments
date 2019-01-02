import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { ErrorComponent } from './error/error.component';
import { MoviesComponent } from './movies/movies.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cities',component:CitiesComponent},
  {path:'movies',component:MoviesComponent},
  {path:'exit',component:ExitComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo:"error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
