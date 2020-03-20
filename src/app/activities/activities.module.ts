import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { IdverifComponent } from './idverif/idverif.component';
import { ApikeyComponent } from './apikey/apikey.component';

@NgModule({
  declarations: [
  ActivityComponent,
  ProfileComponent,
  IdverifComponent,
  ApikeyComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
