import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/_models/Mymission';
import { User } from 'src/app/_models/user';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-missions-page',
  templateUrl: './missions-page.component.html',
  styleUrls: ['./missions-page.component.css']
})
export class MissionsPageComponent implements OnInit {

  mission:Mymission = new Mymission();
  missionList:Mymission[]=[]
  user!:User

  nbPlacesUsed:any

  idMiss :any
  
  constructor(
    private _missionService : MymissionService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any)=>{
      this.missionList = res.body
    console.log(this.missionList)
    })
  }

  participateToMission(id:any , name:any){
    this._missionService.participateToMission(id,name).subscribe((res:any)=>{
      console.log(res.body)
    })
  }
  getNbPlaces(idM : any) {
   this._missionService.getNbPlaces(idM).subscribe((res:any)=>{
    this.nbPlacesUsed = res.body
    console.log(res.body)
   })
  }

}
