import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';

import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { PlayerPComponent } from './player-p/player-p.component';
import { RouterModule } from '@angular/router';
import { PollingPageComponent } from './polling-page/polling-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OrangeCapComponent } from './orange-cap/orange-cap.component';
import { PurpleCapComponent } from './purple-cap/purple-cap.component';
import { PointsTableComponent } from './points-table/points-table.component';

@NgModule({
  declarations: [
    TeamsDetailsComponent,
    PlayerPComponent,
    PollingPageComponent,
    ScheduleComponent,
    OrangeCapComponent,
    PurpleCapComponent,
    PointsTableComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
