import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mymission } from '../_models/Mymission';

@Injectable({
  providedIn: 'root'
})
export class MymissionService {

  url = `${environment.apiBaseUrl}`

  constructor(
    private http:HttpClient
  ) {}

   getAllMissions() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/getAll` , {observe : 'response'})
   }

   getMissionById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Mymission/getById/${id}` , {observe : 'response'})
   }

   addMission(mission : Mymission) : Observable<HttpResponse<any>>{
    return this.http.post(`${this.url}/Mymission/addWC` , mission , {observe : 'response'})
   } 

   updateMission(mission:Mymission) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/Mymission/update` , mission , {observe : 'response'})
   }

   deleteMission(id : any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/Mymission/delete/${id}` , {observe : 'response'})
   }

}
