import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import {HeaderModule} from '@lotto/components/common/header/header.module';
import {LoadingModule} from '@lotto/components/common/loading/loading.module';



@NgModule({
  declarations: [ContainerComponent],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    LoadingModule
  ]
})
export class ContainerModule { }
