import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/_models/Mymission';
import { Competence } from 'src/app/_models/competence';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  hideForm = true;
  mission : Mymission = new Mymission()
  competenceList: Competence[]=[]

  constructor(
    private _missionService : MymissionService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  addMission(){
    this._missionService.addMission(this.mission).subscribe({
      error:(err:any) => console.log(err),
      next : ()=> this._router.navigateByUrl('/admin/mission')
  })
  console.log(this.mission)
  }

}
