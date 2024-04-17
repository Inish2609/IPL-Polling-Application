import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TeamsComponent } from './teams/teams.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PollsComponent } from './polls/polls.component';
import { TeamOwnerDetailsComponent } from './team-owner-details/team-owner-details.component';
import { RouterModule } from '@angular/router';
import { PointsComponent } from './points/points.component';
import { OrangeComponent } from './orange/orange.component';
import { PurpleComponent } from './purple/purple.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SlidersComponent,
    TeamsComponent,
    NavbarComponent,
    PlayerDetailsComponent,
    PlayerProfileComponent,
    PollsComponent,
    TeamOwnerDetailsComponent,
    PointsComponent,
    OrangeComponent,
    PurpleComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SlidersComponent,
    TeamsComponent,
    NavbarComponent,
    PlayerDetailsComponent,
    PlayerProfileComponent,
    PollsComponent,
    TeamOwnerDetailsComponent,
    PointsComponent,
    OrangeComponent,
    PurpleComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
