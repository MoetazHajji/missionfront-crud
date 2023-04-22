import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competence } from 'src/app/_models/competence';
import { CompetenceService } from 'src/app/_services/competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  competence:Competence = new Competence()

  constructor(
    private _CmtService : CompetenceService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  addCompetence(){
    this._CmtService.addComptence(this.competence).subscribe({
      error :(err:any) => console.log(err),
      next : ()=> this._router.navigateByUrl('/admin/competence')
    })
  }

}
