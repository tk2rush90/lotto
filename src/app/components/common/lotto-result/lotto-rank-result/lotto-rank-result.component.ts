import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lotto-rank-result',
  templateUrl: './lotto-rank-result.component.html',
  styleUrls: ['./lotto-rank-result.component.scss']
})
export class LottoRankResultComponent implements OnInit {
  // rank
  @Input() rank: number | undefined;
  // rank count
  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
