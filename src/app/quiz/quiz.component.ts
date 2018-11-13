import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[];
  iQuestion = 0;
  currentQuestion: Question;
  answer: string;
  found: boolean;
  hasNext = true;
  error: string;

  constructor(private quizService: QuizService)  { }

  ngOnInit() {
  }

  newGame() {
    this.quizService.buildNewQuiz(10).subscribe(
    (questions: Question[]) => {
      this.questions = questions;
      this.loadNextQuestion();
    },
    error => console.log(error));
   }

  loadNextQuestion() { }

  timeSpent() { }

  answerGiven(answer: string) { }

  showAnswer() { }

}
