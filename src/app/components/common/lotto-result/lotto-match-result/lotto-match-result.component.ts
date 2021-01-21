import {Component, Input, OnInit} from '@angular/core';
import {LottoHistory} from '@lotto/utils/lotto.util';
import {LottoBall} from '@lotto/models/lotto-ball';

@Component({
  selector: 'app-lotto-match-result',
  templateUrl: './lotto-match-result.component.html',
  styleUrls: ['./lotto-match-result.component.scss']
})
export class LottoMatchResultComponent implements OnInit {
  // round
  @Input() round: number | undefined;

  /**
   * set history object
   * @param history history
   */
  @Input() set history(history: LottoHistory | undefined) {
    this._history = history;
    this._createBalls();
  }

  /**
   * set chosen numbers
   * @param chosenNumbers chosen numbers
   */
  @Input() set chosenNumbers(chosenNumbers: number[]) {
    this._chosenNumbers = chosenNumbers || [];
    this._createChosenNumberMap();
  }
  // common balls
  commonBalls: LottoBall[] = [];
  // bonus ball
  bonusBall: LottoBall = new LottoBall();
  // map of chosen numbers
  // `k` is chosen number
  chosenNumberMap: { [k: string]: boolean } = {};
  // lotto history
  private _history: LottoHistory | undefined;
  // chosen numbers
  private _chosenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * create ball objects for common and bonus
   */
  private _createBalls(): void {
    if (this._history) {
      this.commonBalls = this._history.numbers.map(value => {
        const ball = new LottoBall();

        ball.setValue(value);

        return ball;
      });

      this.bonusBall.setValue(this._history.bonus);
    }
  }

  /**
   * create map of chosen numbers
   */
  private _createChosenNumberMap(): void {
    this.chosenNumberMap = {};

    this._chosenNumbers.forEach(value => this.chosenNumberMap[value] = true);
  }
}
