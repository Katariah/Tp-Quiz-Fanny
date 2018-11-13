import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }
  // score: number;
  score: 9;

  ngOnInit() {
    // récupère le score depuis quizcomponent
  }

}
