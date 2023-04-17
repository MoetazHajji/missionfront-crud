import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competence } from 'src/app/_models/competence';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

  @Input() modalEditCompetence:boolean=true ;
  @Input() competenceId : any
  @Output() closeModalEditMission=new EventEmitter<boolean>(); 
  @Output() refreshMission=new EventEmitter<boolean>();

  competence:Competence = new Competence()
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm:any

  constructor() { }

  ngOnInit(): void {
  }

}
