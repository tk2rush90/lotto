import { Injectable } from '@angular/core';
import {getHistories, getNumbers, LottoHistory} from '@lotto/utils/lotto.util';
import {BehaviorSubject, Observable} from 'rxjs';

export interface LottoChance {
  // `k` is number can be casted
  [k: number]: number;
}

@Injectable({
  providedIn: 'root'
})
export class LottoService {
  // numbers can be casted
  private _numbers: number[] = getNumbers();
  // histories
  private _histories: LottoHistory[] = getHistories();
  // chances
  private _chances: LottoChance = {};
  // chosen numbers
  private _chosenNumbers$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  // step percentage
  private _stepPercentage = 1 / 45;

  constructor() {
  }

  /**
   * return the chosen numbers as observable
   */
  get chosenNumbers$(): Observable<number[]> {
    return this._chosenNumbers$.asObservable();
  }

  /**
   * choose numbers
   */
  chooseNumbers(): void {
    this._numbers = getNumbers();
    this._histories = getHistories();

    const numbers: number[] = [];

    while (numbers.length < 6) {
      this._calculateChances();

      const chosen = this._chooseOne();

      if (chosen) {
        this._removeChosenOne(chosen);

        numbers.push(chosen);
      }
    }

    this._chosenNumbers$.next(numbers);
  }

  /**
   * calculate casting chances for each number
   */
  private _calculateChances(): void {
    const chances: LottoChance = {};
    let total = 0;

    // count for each number
    this._histories.forEach(history => {
      history.numbers.forEach(n => {
        if (!chances[n]) {
          chances[n] = 0;
        }

        chances[n]++;
        total++;
      });
    });

    // percentage for each number
    Object.keys(chances).forEach(key => {
      const index = parseInt(key, undefined);

      chances[index] = chances[index] / total;
      chances[index] = this._stepPercentage + (this._stepPercentage - chances[index]);

      if (chances[index - 1]) {
        chances[index] += chances[index - 1];
      }
    });

    this._chances = chances;
  }

  /**
   * choose one number
   */
  private _chooseOne(): number | void {
    const random = Math.random();

    const chosen = Object.keys(this._chances).find((key: string): boolean | void => {
      const index = parseInt(key, undefined);
      const start = this._chances[index - 1] || 0;
      const end = this._chances[index];

      if (start && end) {
        if (random > start && random <= end) {
          return true;
        }
      }
    });

    if (chosen) {
      return parseInt(chosen, undefined);
    }
  }

  /**
   * remove chosen one from history
   * @param chosen chosen
   */
  private _removeChosenOne(chosen: number): void {
    this._histories.forEach(history => {
      history.numbers = history.numbers.filter(item => item !== chosen);
    });
  }
}
