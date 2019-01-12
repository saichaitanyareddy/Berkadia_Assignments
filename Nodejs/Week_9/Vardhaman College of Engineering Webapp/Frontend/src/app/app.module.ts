import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import {  HttpClientModule } from '@angular/common/http';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { AdmissionComponent } from './admission/admission.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ElasticSearchComponent } from './elastic-search/elastic-search.component';
import { ElasticSearchResultsComponent } from './elastic-search-results/elastic-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    ProgressReportComponent,
    AdmissionComponent,
    StudentProfileComponent,
    CoursesComponent,
    ElasticSearchComponent,
    ElasticSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
