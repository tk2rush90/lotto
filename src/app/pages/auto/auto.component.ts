import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent implements OnInit {
  // chosen numbers
  chosenNumbers: number[] = [];
  // the flag for showing result
  showResult = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * hide result and reset chosen numbers
   */
  onRollingStart(): void {
    this.showResult = false;
    this.chosenNumbers = [];
  }

  /**
   * show result page with chosen numbers
   * @param numbers chosen numbers
   */
  onBallsReady(numbers: number[]): void {
    this.chosenNumbers = numbers;
    this.showResult = true;
  }
}
