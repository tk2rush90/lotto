import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContainerModule} from '@lotto/components/common/container/container.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from '@lotto/components/common/toast/toast.module';
import {SubscriptionService} from '@lotto/services/subscription/subscription.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  providers: [
    SubscriptionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
