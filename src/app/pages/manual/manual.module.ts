import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualRoutingModule } from './manual-routing.module';
import { ManualComponent } from './manual.component';
import {ManualPickerModule} from '@lotto/components/manual/manual-picker/manual-picker.module';
import {LottoResultModule} from '@lotto/components/common/lotto-result/lotto-result.module';


@NgModule({
  declarations: [ManualComponent],
  imports: [
    CommonModule,
    ManualRoutingModule,
    ManualPickerModule,
    LottoResultModule
  ]
})
export class ManualModule { }
