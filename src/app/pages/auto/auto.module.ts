import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoRoutingModule } from './auto-routing.module';
import { AutoComponent } from './auto.component';
import {AutoPickerModule} from '@lotto/components/auto/auto-picker/auto-picker.module';
import {LottoResultModule} from '@lotto/components/common/lotto-result/lotto-result.module';


@NgModule({
  declarations: [AutoComponent],
  imports: [
    CommonModule,
    AutoRoutingModule,
    AutoPickerModule,
    LottoResultModule
  ]
})
export class AutoModule { }
