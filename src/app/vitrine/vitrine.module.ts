import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { MissionsPageComponent } from './missions-page/missions-page.component';


@NgModule({
  declarations: [
    MissionsPageComponent
  ],
  imports: [
    CommonModule,
    VitrineRoutingModule
  ]
})
export class VitrineModule { }
