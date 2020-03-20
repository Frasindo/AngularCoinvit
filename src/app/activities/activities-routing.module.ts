import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { IdverifComponent } from './idverif/idverif.component';
import { ApikeyComponent } from './apikey/apikey.component';
const activityRoutes: Routes = [
{ path: 'activity',  component: ActivityComponent },
{ path: 'profile',  component: ProfileComponent },
{ path: 'idverif',  component: IdverifComponent },
{ path: 'apikey',  component: ApikeyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(activityRoutes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
