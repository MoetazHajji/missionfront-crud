import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsPageComponent } from './missions-page/missions-page.component';

const routes: Routes = [{ path: 'mission', component: MissionsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrineRoutingModule { }
