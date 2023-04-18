import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/_models/Mymission';
import { Competence } from 'src/app/_models/competence';
import { CompetenceService } from 'src/app/_services/competence.service';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  hideForm = false;
  mission : Mymission = new Mymission()
  competenceList: Competence[]=[]
  idMiss : any
  
  myValues: Competence[] = [];
  
  selectedCompetence:Competence[]=[];

  constructor(
    private _missionService : MymissionService,
    private _router : Router,
    private _cmptService : CompetenceService
  ) {
  }

  ngOnInit(): void {
    this._cmptService.getAll().subscribe((res:any)=>{
      this.competenceList = res.body
    })
  }

  addMission(){
    this._missionService.addMission(this.mission).subscribe({
      error:(err:any) => console.log(err),
      next : ()=> this._router.navigateByUrl('/admin/mission')
  })
  console.log(this.mission)
  }

  selectCompetence(competence: any) {      
      this.selectedCompetence.push(competence.id);
      this.myValues =this.selectedCompetence
  }

  affectCompetenceToMission($event:any){
    this._missionService.affectCompToMiss($event,this.myValues).subscribe((data:any)=>{
      console.log(data)
    })
  }


}
