import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackadminRoutingModule } from './backadmin-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MissionComponent } from './mission/mission.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddMissionComponent } from './mission/add-mission/add-mission.component';
import { EditMissionComponent } from './mission/edit-mission/edit-mission.component';
import { FormsModule } from '@angular/forms';
import { CompetenceComponent } from './competence/competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';


@NgModule({
  declarations: [
    SideBarComponent,
    AdminLayoutComponent,
    MissionComponent,
    HeaderComponent,
    AddMissionComponent,
    EditMissionComponent,
    CompetenceComponent,
    EditCompetenceComponent,
    AddCompetenceComponent
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule,
    FormsModule
  ]
})
export class BackadminModule { }
