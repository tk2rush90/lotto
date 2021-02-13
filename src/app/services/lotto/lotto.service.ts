import { Injectable } from '@angular/core';
import {getHistories, LottoHistory} from '@lotto/utils/lotto.util';
import {BehaviorSubject, Observable} from 'rxjs';
import {RankResult} from '@lotto/components/common/lotto-result/lotto-result.component';
import {environment} from '../../../environments/environment';

const {
  production,
} = environment;

export interface LottoChance {
  // `k` is number can be casted
  [k: number]: number;
}

@Injectable({
  providedIn: 'root'
})
export class LottoService {
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

    if (production) {
      this._chosenNumbers$.next(numbers);
    } else {
      const ranks = this._calculateCountsForRanks(this._createChosenNumberMap(numbers));

      if (ranks._5thRank.count < 5) {
        this._chosenNumbers$.next(numbers);
      } else {
        setTimeout(() => {
          this.chooseNumbers();
        });
      }
    }
  }

  /**
   * calculate casting chances for each number
   */
  private _calculateChances(): void {
    const chances: LottoChance = {};
    let total = 0;

    // count for each number
    this._histories.forEach(history => {
      [...history.numbers, history.bonus].forEach(n => {
        if (n) {
          if (!chances[n]) {
            chances[n] = 0;
          }

          chances[n]++;
          total++;
        }
      });
    });

    // percentage for each number
    Object.keys(chances).forEach(key => {
      const index = parseInt(key, undefined);

      chances[index] = chances[index] / total;

      // for production logic
      if (production) {
        chances[index] = this._stepPercentage + (this._stepPercentage - chances[index]);
      }

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

      if (chosen === history.bonus) {
        delete history.bonus;
      }
    });
  }

  /**
   * create map of chosen numbers
   */
  private _createChosenNumberMap(numbers: number[]): { [k: number]: boolean } {
    const chosenNumberMap: { [k: number]: boolean } = {};

    numbers.forEach(value => {
      chosenNumberMap[value] = true;
    });

    return chosenNumberMap;
  }

  /**
   * calculate counts for ranks
   */
  private _calculateCountsForRanks(chosenNumberMap: { [k: number]: boolean } = {}): {
    _1stRank: RankResult,
    _2ndRank: RankResult,
    _3rdRank: RankResult,
    _4thRank: RankResult,
    _5thRank: RankResult,
  } {
    const ranks = {
      _1stRank: new RankResult(1),
      _2ndRank: new RankResult(2),
      _3rdRank: new RankResult(3),
      _4thRank: new RankResult(4),
      _5thRank: new RankResult(5),
    };

    getHistories().forEach(history => {
      this._distributeRanks(ranks, history, chosenNumberMap);
    });

    return ranks;
  }

  /**
   * distribute ranks with history
   * @param ranks ranks
   * @param history history
   * @param chosenNumberMap chosen number map
   */
  private _distributeRanks(
    ranks: {
      _1stRank: RankResult,
      _2ndRank: RankResult,
      _3rdRank: RankResult,
      _4thRank: RankResult,
      _5thRank: RankResult,
    },
    history: LottoHistory,
    chosenNumberMap: { [k: number]: boolean } = {}): {
    _1stRank: RankResult,
    _2ndRank: RankResult,
    _3rdRank: RankResult,
    _4thRank: RankResult,
    _5thRank: RankResult,
  } {
    const numbers = history.numbers.filter(value => chosenNumberMap[value]);

    switch (numbers.length) {
      case 6: {
        ranks._1stRank.count++;
        break;
      }

      case 5: {
        if (chosenNumberMap[history.bonus as number]) {
          ranks._2ndRank.count++;
        } else {
          ranks._3rdRank.count++;
        }

        break;
      }

      case 4: {
        ranks._4thRank.count++;
        break;
      }

      case 3: {
        ranks._5thRank.count++;
        break;
      }
    }

    return ranks;
  }
}
