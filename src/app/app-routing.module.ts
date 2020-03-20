import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WalletComponent } from './centralize/wallet/wallet.component';
import { OrderComponent } from './centralize/order/order.component';
import { HistoryComponent } from './centralize/history/history.component';
import { WalletComponentDex } from './decentralize/wallet/wallet.component';
import { OrderComponentDex } from './decentralize/order/order.component';
import { HistoryComponentDex } from './decentralize/history/history.component';




const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'wallet-centralize',
    component: WalletComponent
  },
  {
    path: 'order-centralize',
    component: OrderComponent
  },
  {
    path: 'history-centralize',
    component: HistoryComponent
  },
  {
    path: 'wallet-decentralize',
    component: WalletComponentDex
  },
  {
    path: 'order-decentralize',
    component: OrderComponentDex
  },{
    path: 'history-decentralize',
    component: HistoryComponentDex
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
