import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualPickerComponent } from './manual-picker.component';
import { ManualNumberComponent } from './manual-number/manual-number.component';
import {LottoButtonModule} from '@lotto/components/common/lotto-button/lotto-button.module';



@NgModule({
  declarations: [ManualPickerComponent, ManualNumberComponent],
  exports: [
    ManualPickerComponent
  ],
  imports: [
    CommonModule,
    LottoButtonModule
  ]
})
export class ManualPickerModule { }
