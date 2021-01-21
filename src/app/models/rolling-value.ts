import {randomNumber} from '@lotto/utils/random.util';

export class RollingValue {
  // set initial random value
  value = randomNumber(1, 45);
  // timer for timeout
  protected _timer: any;
  // timing delay
  protected _delay = 10;

  /**
   * roll the value
   */
  roll(): void {
    this.clearTimeout();

    this._timer = setTimeout(() => {
      this._setNextValue();
      this.roll();
    }, this._delay);
  }

  /**
   * set next value
   */
  protected _setNextValue(): void {
    const next = this.value + 1;

    if (next > 45) {
      this.value = 1;
    } else {
      this.value = next;
    }
  }

  /**
   * clear rolling timeout
   */
  clearTimeout(): void {
    clearTimeout(this._timer);
  }
}
