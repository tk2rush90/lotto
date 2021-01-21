import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottoButtonComponent } from './lotto-button.component';



@NgModule({
  declarations: [LottoButtonComponent],
  exports: [
    LottoButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LottoButtonModule { }
