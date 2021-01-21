import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {getHistories, LottoHistory} from '@lotto/utils/lotto.util';

export class RankResult {
  rank: number;
  count = 0;

  constructor(rank: number) {
    this.rank = rank;
  }
}

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.scss']
})
export class LottoResultComponent implements OnInit, OnDestroy {
  /**
   * set chosen numbers
   * @param numbers chosen numbers
   */
  @Input() set chosenNumbers(numbers: number[]) {
    this._chosenNumbers = numbers || [];
    this._createChosenNumberMap();
    this._calculateCountsForRanks();
    this._addHistories(true);
  }
  // rank results
  ranks: RankResult[] = [];
  // displaying histories
  displayingHistories: LottoHistory[] = [];
  // previous histories
  private _histories: LottoHistory[] = getHistories();
  // chosen numbers
  private _chosenNumbers: number[] = [];
  // map of chosen numbers
  private _chosenNumberMap: {[k: number]: boolean} = {};
  // rank results
  private _1stRank = new RankResult(1);
  private _2ndRank = new RankResult(2);
  private _3rdRank = new RankResult(3);
  private _4thRank = new RankResult(4);
  private _5thRank = new RankResult(5);
  // page number for history
  private _historyPage = 0;
  // size for history
  private _historySize = 10;
  // timeout timer
  private _timer: any;

  constructor() {
    this._initializeRanks();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  /**
   * return the chosen numbers
   */
  get chosenNumbers(): number[] {
    return this._chosenNumbers;
  }

  /**
   * return the number of total histories
   */
  get totalHistories(): number {
    return this._histories.length;
  }

  /**
   * initialize ranks
   */
  private _initializeRanks(): void {
    this.ranks = [
      this._1stRank,
      this._2ndRank,
      this._3rdRank,
      this._4thRank,
      this._5thRank,
    ];
  }

  /**
   * create map of chosen numbers
   */
  private _createChosenNumberMap(): void {
    this._chosenNumberMap = {};

    this._chosenNumbers.forEach(value => {
      this._chosenNumberMap[value] = true;
    });
  }

  /**
   * calculate counts for ranks
   */
  private _calculateCountsForRanks(): void {
    this._histories.forEach(history => {
      this._distributeRanks(history);
    });
  }

  /**
   * distribute ranks with history
   * @param history history
   */
  private _distributeRanks(history: LottoHistory): void {
    const numbers = history.numbers.filter(value => this._chosenNumberMap[value]);

    switch (numbers.length) {
      case 6: {
        this._1stRank.count++;
        break;
      }

      case 5: {
        if (this._chosenNumberMap[history.bonus]) {
          this._2ndRank.count++;
        } else {
          this._3rdRank.count++;
        }

        break;
      }

      case 4: {
        this._4thRank.count++;
        break;
      }

      case 3: {
        this._5thRank.count++;
        break;
      }
    }
  }

  /**
   * add histories to display
   * @param start set `true` to reset `displayingHistories`
   */
  private _addHistories(start?: boolean): void {
    clearTimeout(this._timer);

    if (start) {
      this.displayingHistories = [];
      this._historyPage = 0;
    }

    this.displayingHistories.push(...[...this._histories].splice((this._historyPage * this._historySize), this._historySize));
    this._historyPage++;

    if (this._historyPage < this.totalHistories) {
      this._timer = setTimeout(() => {
        this._addHistories();
      });
    }
  }
}
