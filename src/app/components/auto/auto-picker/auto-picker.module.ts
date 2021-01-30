import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoPickerComponent } from './auto-picker.component';
import {LottoBallModule} from '@lotto/components/common/lotto-ball/lotto-ball.module';
import {LottoButtonModule} from '@lotto/components/common/lotto-button/lotto-button.module';
import {SelectModule} from '@lotto/components/common/select/select.module';
import {FormFieldModule} from '@lotto/components/common/form-field/form-field.module';
import {InputModule} from '@lotto/components/common/input/input.module';
import {FormsModule} from '@angular/forms';
import {InfoModule} from '@lotto/components/common/info/info.module';



@NgModule({
  declarations: [AutoPickerComponent],
  exports: [
    AutoPickerComponent
  ],
  imports: [
    CommonModule,
    LottoBallModule,
    LottoButtonModule,
    SelectModule,
    FormFieldModule,
    InputModule,
    FormsModule,
    InfoModule
  ]
})
export class AutoPickerModule { }
