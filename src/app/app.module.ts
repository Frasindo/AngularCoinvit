import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './centralize/order/order.component';
import { HistoryComponent } from './centralize/history/history.component';
import { WalletComponentDex } from './decentralize/wallet/wallet.component';
import { ActivitiesModule } from './activities/activities.module';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    HistoryComponent,
    WalletComponentDex,
    ExchangeComponent,
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
