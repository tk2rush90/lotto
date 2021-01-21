import {AfterViewInit, Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {LottoService} from '@lotto/services/lotto/lotto.service';
import {SubscriptionService} from '@lotto/services/subscription/subscription.service';
import {LottoBallComponent} from '@lotto/components/common/lotto-ball/lotto-ball.component';
import {LottoBall} from '@lotto/models/lotto-ball';

@Component({
  selector: 'app-auto-picker',
  templateUrl: './auto-picker.component.html',
  styleUrls: ['./auto-picker.component.scss'],
  providers: [
    SubscriptionService,
  ],
})
export class AutoPickerComponent implements OnInit, AfterViewInit {
  // emit when roll started
  @Output() rolling: EventEmitter<void> = new EventEmitter<void>();
  // emit after all numbers are ready
  @Output() ready: EventEmitter<number[]> = new EventEmitter<number[]>();
  // ball list
  @ViewChildren(LottoBallComponent) lottoBallList: QueryList<LottoBallComponent> | undefined;
  // chosen numbers
  chosenNumbers: number[] = [];
  // balls
  lottoBalls: LottoBall[] = [
    new LottoBall(),
    new LottoBall(),
    new LottoBall(),
    new LottoBall(),
    new LottoBall(),
    new LottoBall(),
  ];
  // delay between setting value for balls
  private _delay = 700;
  // timer for setting value
  private _timer: any;
  // ordered values
  private _orderedValues: number[] = [];
  // index of ball to set value
  private _ballIndex = 0;

  constructor(
    private lottoService: LottoService,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
    this._subscribeChosenNumbers();
    this._subscribeBallStopped();
  }

  ngAfterViewInit(): void {
    this.roll();
  }

  /**
   * subscribe chosen numbers from lotto service
   */
  private _subscribeChosenNumbers(): void {
    const sub = this.lottoService
      .chosenNumbers$
      .subscribe(res => {
        if (res.length >= 6) {
          this.chosenNumbers = res;
          this._orderTheChosenValues();
          this._graduallySetTheValues();
        }
      });

    this.subscriptionService.store('_subscribeChosenNumbers', sub);
  }

  /**
   * order the chosen values
   */
  private _orderTheChosenValues(): void {
    this._orderedValues = this.chosenNumbers.sort((a, b) => {
      return a - b;
    });
  }

  /**
   * roll and get the random numbers
   */
  roll(): void {
    this.rolling.emit();

    this._rollTheBalls();

    this._ballIndex = 0;
    this.lottoService.chooseNumbers();
  }

  /**
   * roll the lotto ball objects
   */
  private _rollTheBalls(): void {
    this.lottoBalls.forEach(ball => ball.roll(true));
  }

  /**
   * set the value of balls gradually
   */
  private _graduallySetTheValues(): void {
    clearTimeout(this._timer);

    this._timer = setTimeout(() => {
      const ball = this.lottoBalls[this._ballIndex];
      const value = this._orderedValues[this._ballIndex];

      if (ball && value) {
        ball.stop(value);
      }
    }, this._delay);
  }

  /**
   * subscribe ball stopped emitter from each ball
   */
  private _subscribeBallStopped(): void {
    const subs = this.lottoBalls.map((ball, index) => {
      return ball.stopped
        .subscribe(() => {
          this._ballIndex = index + 1;

          if (this._ballIndex < 6) {
            this._graduallySetTheValues();
          } else {
            this.ready.emit(this._orderedValues);
          }
        });
    });

    this.subscriptionService.store('_subscribeBallStopped', subs);
  }
}
