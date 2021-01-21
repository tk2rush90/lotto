import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoPickerComponent } from './auto-picker.component';
import {LottoBallModule} from '@lotto/components/common/lotto-ball/lotto-ball.module';
import {LottoButtonModule} from '@lotto/components/common/lotto-button/lotto-button.module';



@NgModule({
  declarations: [AutoPickerComponent],
  exports: [
    AutoPickerComponent
  ],
  imports: [
    CommonModule,
    LottoBallModule,
    LottoButtonModule
  ]
})
export class AutoPickerModule { }
