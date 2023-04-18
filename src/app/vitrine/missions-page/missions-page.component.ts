import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/_models/Mymission';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-missions-page',
  templateUrl: './missions-page.component.html',
  styleUrls: ['./missions-page.component.css']
})
export class MissionsPageComponent implements OnInit {

  mission:Mymission = new Mymission();
  missionList:Mymission[]=[]
  
  constructor(
    private _missionService : MymissionService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any)=>{
      this.missionList = res
    console.log(this.missionList)
    })
  }

  participateToMission(id:any , name:any){
    this._missionService.participateToMission(id,name).subscribe({
      next : ()=> this._router.navigateByUrl('/mission')
    })
  }

}
