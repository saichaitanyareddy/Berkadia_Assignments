import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { ParametersComponent } from './parameters/parameters.component';
import { LocationsComponent } from './locations/locations.component';
import { SourcesComponent } from './sources/sources.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'countries',component:CountriesComponent},
  {path:'cities',component:CitiesComponent},
  {path:'locations',component:LocationsComponent},
  {path:'measurements',component:MeasurementsComponent},
  {path:'parameters',component:ParametersComponent},
  {path:'sources',component:SourcesComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
