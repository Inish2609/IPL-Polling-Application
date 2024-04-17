import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';
import { PlayerPComponent } from './player-p/player-p.component';
import { PollingPageComponent } from './polling-page/polling-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OrangeCapComponent } from './orange-cap/orange-cap.component';
import { PurpleCapComponent } from './purple-cap/purple-cap.component';
import { PointsTableComponent } from './points-table/points-table.component';

const routes: Routes = [
  {path:"teamDetails/:team_name",component:TeamsDetailsComponent},
  {path:"players/:id",component:PlayerPComponent},
  {path:"polling",component:PollingPageComponent},
  {path:"schedule",component:ScheduleComponent},
  {path:"orange_cap",component:OrangeCapComponent},
  {path:"purple_cap",component:PurpleCapComponent},
  {path:"points_table",component:PointsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
