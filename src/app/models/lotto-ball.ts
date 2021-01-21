import {RollingValue} from '@lotto/models/rolling-value';
import {environment} from '../../environments/environment';
import {EventEmitter} from '@angular/core';

const {
  ballColors,
} = environment;

export class LottoBall extends RollingValue {
  // stopped emitter
  stopped: EventEmitter<void> = new EventEmitter<void>();
  // ball color
  color: string | undefined;
  // stop value
  private _stopValue: number | undefined;

  constructor() {
    super();
  }

  /**
   * set value for ball
   * @param value value
   */
  setValue(value: number): void {
    this.value = value;
    this._setColor();
  }

  /**
   * override role event
   * @param reset reset the `_stopValue` when `true`
   */
  roll(reset?: boolean): void {
    if (reset) {
      this.color = undefined;
      this._stopValue = undefined;
    }

    this.clearTimeout();

    if (this.stoppable) {
      this._stopRolling();
    } else {
      this._repeatRolling();
    }
  }

  /**
   * return `true` when `value` is same with `_stopValue`
   */
  get stoppable(): boolean {
    return this._stopValue === this.value;
  }

  /**
   * stop rolling
   */
  private _stopRolling(): void {
    this._setColor();
    this.stopped.emit();
  }

  /**
   * repeat rolling
   */
  private _repeatRolling(): void {
    this._timer = setTimeout(() => {
      this._setNextValue();
      this.roll();
    }, this._delay);
  }

  /**
   * stop the value
   * @param value stop value
   */
  stop(value: number): void {
    this._stopValue = value;
  }

  /**
   * set ball color with value
   */
  private _setColor(): void {
    ballColors.forEach(item => {
      if (this.value) {
        if (this.value >= item.range[0] && this.value <= item.range[1]) {
          this.color = item.color;
        }
      }
    });
  }
}
