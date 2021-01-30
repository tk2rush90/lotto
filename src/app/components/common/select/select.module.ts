import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {InputModule} from '@lotto/components/common/input/input.module';
import {IconsModule} from '@lotto/components/common/icons/icons.module';
import {FormControlBaseModule} from '@lotto/components/common/form-control-base/form-control-base.module';
import {FormsModule} from '@angular/forms';
import {AutoPositionerModule} from '@lotto/components/common/auto-positioner/auto-positioner.module';
import {AutoCloserModule} from '@lotto/components/common/auto-closer/auto-closer.module';
import {AutoScrollerModule} from '@lotto/components/common/auto-scroller/auto-scroller.module';



@NgModule({
  declarations: [SelectComponent],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    IconsModule,
    FormControlBaseModule,
    FormsModule,
    AutoPositionerModule,
    AutoCloserModule,
    AutoScrollerModule,
  ]
})
export class SelectModule { }
