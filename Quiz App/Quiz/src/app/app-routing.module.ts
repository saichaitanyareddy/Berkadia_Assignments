import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:QuizComponent,pathMatch:"full"},
  {path:'questions',component:QuestionsComponent},
  {path:'result',component:ResultComponent},
  {path:'pagenotfound',component:PageNotFoundComponent},
  {path:'**',redirectTo:'pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
