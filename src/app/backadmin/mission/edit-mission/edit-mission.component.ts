import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  mission!:Mymission
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm:any

  id!:any

  constructor(
    private _missionService:MymissionService,
    private v:ActivatedRoute,
    private _router : Router
  ) { } 

  ngOnInit(): void {
    this.id=this.v.snapshot.params['id']
    this._missionService.getMissionById(this.id).subscribe((res:any)=>{
      this.mission=res.body
    })
  }

  editMission(){
    this._missionService.updateMission(this.mission).subscribe({
      next:()=> this._router.navigateByUrl('/admin/mission'),
      error:(err:any) => console.log(err)
    })
  }

}