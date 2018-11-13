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
  displayAnswer: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.buildNewQuiz(10).subscribe(
      (questions: Question[]) => this.questions = questions)
  }

  newGame() {
    this.quizService.score = 0;
    this.quizService.buildNewQuiz(10).subscribe(
      (questions: Question[]) => {
        this.questions = questions;
        this.loadNextQuestion();
      },
      error => console.log(error));
  }

  loadNextQuestion() {
    this.currentQuestion = this.questions[this.iQuestion];
    this.iQuestion++;
    this.hasNext = this.iQuestion < this.quizService.nbQuestions;
    this.displayAnswer = false;
  }

  timeSpent() {
    this.found = false;
    this.displayAnswer = true;
  }

  answerGiven(proposition: string) {
    this.found = this.currentQuestion.capitale === proposition
    this.quizService.score += +(this.found);
    this.displayAnswer = true;
  }

  showAnswer() { }

}
