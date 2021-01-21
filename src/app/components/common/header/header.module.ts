import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { GithubIconComponent } from './github-icon/github-icon.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, GithubIconComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderModule { }
