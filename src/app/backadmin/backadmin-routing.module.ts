import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AddMissionComponent } from './mission/add-mission/add-mission.component';
import { CompetenceComponent } from './competence/competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { EditMissionComponent } from './mission/edit-mission/edit-mission.component';
const routes: Routes = [{ 
  path: 'mission', component: AdminLayoutComponent,
  children :[
    {
    path:'' ,
    component : MissionComponent 
    },
    {
      path:'add',
      component : AddMissionComponent
    },
    {
      path:'edit/:id',
      component:EditMissionComponent
    }
  ]
 },
 {
  path: 'competence', component: AdminLayoutComponent,
  children :[
    {
      path:'' ,
      component : CompetenceComponent 
      },
      {
        path:'add',
        component : AddCompetenceComponent
      }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
