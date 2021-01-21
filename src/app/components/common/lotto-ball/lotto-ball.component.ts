import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lotto-ball',
  templateUrl: './lotto-ball.component.html',
  styleUrls: ['./lotto-ball.component.scss']
})
export class LottoBallComponent implements OnInit {
  // chosen state
  @Input() matched = false;
  // matchable ball
  @Input() @HostBinding('class.lotto-matchable') matchable = false;

  /**
   * set color value
   * @param color color
   */
  @Input() set color(color: string | undefined) {
    this._color = color;
  }

  /**
   * bind background color
   */
  @HostBinding('style.background-color') get backgroundColor(): string | undefined | void {
    if (this.matchable) {
      if (this.matched) {
        return this._color;
      }
    } else {
      return this._color;
    }
  }

  private _color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
