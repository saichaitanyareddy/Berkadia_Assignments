import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AirService } from './air.service';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { LocationsComponent } from './locations/locations.component';
import { SourcesComponent } from './sources/sources.component';
import { ParametersComponent } from './parameters/parameters.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CitiesComponent,
    MeasurementsComponent,
    LocationsComponent,
    SourcesComponent,
    ParametersComponent,
    HomeComponent,
    ErrorComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AirService],
  bootstrap: [AppComponent],
  entryComponents:[HomeComponent,HomeDetailsComponent]
})
export class AppModule { }
