import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottoResultComponent } from './lotto-result.component';
import {BarModule} from '@lotto/components/common/bar/bar.module';
import {LottoResultHeaderComponent} from '@lotto/components/common/lotto-result/lotto-result-header/lotto-result-header.component';
import { LottoRankResultComponent } from './lotto-rank-result/lotto-rank-result.component';
import { LottoMatchResultComponent } from './lotto-match-result/lotto-match-result.component';
import {LottoBallModule} from '@lotto/components/common/lotto-ball/lotto-ball.module';



@NgModule({
  declarations: [LottoResultComponent, LottoResultHeaderComponent, LottoRankResultComponent, LottoMatchResultComponent],
  exports: [
    LottoResultComponent
  ],
  imports: [
    CommonModule,
    BarModule,
    LottoBallModule,
  ]
})
export class LottoResultModule { }
