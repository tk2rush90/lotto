import {Component, OnDestroy, OnInit} from '@angular/core';
import {randomNumber} from '@lotto/utils/random.util';
import {RollingValue} from '@lotto/models/rolling-value';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  // rolling values
  rollingValues: RollingValue[] = [
    new RollingValue(),
    new RollingValue(),
    new RollingValue(),
    new RollingValue(),
    new RollingValue(),
    new RollingValue(),
  ];

  constructor() { }

  ngOnInit(): void {
    this._rollTheValues();
  }

  ngOnDestroy(): void {
    this._removeTimers();
  }

  /**
   * roll the all values
   */
  private _rollTheValues(): void {
    this.rollingValues.forEach(value => {
      value.roll();
    });
  }

  /**
   * clear timeout timer for loading numbers
   */
  private _removeTimers(): void {
    this.rollingValues.forEach(value => {
      value.clearTimeout();
    });
  }
}
