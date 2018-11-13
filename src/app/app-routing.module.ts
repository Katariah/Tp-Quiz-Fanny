import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'timer', component: TimerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/quiz' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
