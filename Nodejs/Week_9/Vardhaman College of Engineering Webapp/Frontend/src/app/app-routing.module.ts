import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ErrorComponent } from './error/error.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { AdmissionComponent } from './admission/admission.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ElasticSearchComponent } from './elastic-search/elastic-search.component';
import { ElasticSearchResultsComponent } from './elastic-search-results/elastic-search-results.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'branch',component:CoursesComponent},
  {path:'students',component:StudentDetailsComponent},
  {path:'profile',component:StudentProfileComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'results',component:ResultsComponent},
  {path:'report',component:ProgressReportComponent},
  {path:'search',component:ElasticSearchComponent},
  {path:'searchResults',component:ElasticSearchResultsComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
