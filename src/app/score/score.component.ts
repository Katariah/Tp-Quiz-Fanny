import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router) {
    if (!quizService.score) {
      router.navigate(['/quiz'])
    }
   }

  ngOnInit() {
  }

}
