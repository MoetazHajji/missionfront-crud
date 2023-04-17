import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mymission } from 'src/app/_models/Mymission';
import { MymissionService } from 'src/app/_services/mymission.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {

  @Input() modalEditMission:boolean=true ;
  @Input() missionId : any
  @Output() closeModalEditMission=new EventEmitter<boolean>(); 
  @Output() refreshMission=new EventEmitter<boolean>();

  mission:Mymission = new Mymission()
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm:any

  constructor(
    private _missionService:MymissionService
  ) { } 

  ngOnInit(): void {
    this._missionService.getMissionById(this.missionId).subscribe((res:any)=>{
      this._missionService=res
    })
  }

}
