import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public counter = 10) {

    const traitementRegulier = setInterval(() => {

      this.counter = this.counter - 1;
      console.log(this.counter);
      if (this.counter === 0) {clearInterval(traitementRegulier)}
    }, 100);
  }

ngOnInit() {
}

}

