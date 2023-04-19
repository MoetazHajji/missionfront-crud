import { Component, Input, OnInit } from '@angular/core';
import { Mymission } from 'src/app/_models/Mymission';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  MissionList:Mymission [] = []
  @Input() getMissionId : any

  editMissionModal:boolean = false;

  constructor(
    private _missionService:MymissionService
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any) =>{
      this.MissionList = res.body
    })
  }

  deleteMission(id:any) {
    this._missionService.deleteMission(id).subscribe({
      next:()=>this.MissionList=this.MissionList.filter((p)=>p.id!=id)
    })
  }
}
