import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {BarModule} from '@lotto/components/common/bar/bar.module';
import {LottoButtonModule} from '@lotto/components/common/lotto-button/lotto-button.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BarModule,
    LottoButtonModule
  ]
})
export class HomeModule { }
