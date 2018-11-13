import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeleft: number;
  timeInter: any;

  @Output()
  end = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.timeleft = 10;
    this.timeInter = setInterval(() => {
      this.timeleft = Math.max(0, this.timeleft - 0.1)
      if (this.timeleft === 0) {
        clearInterval(this.timeInter)
        this.end.emit(null)
      }
    }, 100);
  }

}

