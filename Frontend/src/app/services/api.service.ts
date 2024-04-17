import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:3000/"

  constructor(
   private _http : HttpClient
  ) { }

  getSingleTeamDetails(team_name:string){
    return this._http.get(this.url+"teams/"+team_name)
  }

  getSinglePlayerDetails(id:any){
    return this._http.get(this.url+"players/"+id)
  }

  getAllPolls(){
    return this._http.get(this.url+"polls")
  }

  AddValueToTheQuestion(id:number,data:any){
    return this._http.post(this.url+"add_value/"+id,data)
  }

  checkIp(id:number){
    return this._http.get(this.url+"check/"+id)
  }

  pointsTable(){
    return this._http.get(this.url+"points_table")
  }

  orangeCap(){
    return this._http.get(this.url+"orange_cap")
  }

  purpleCap(){
    return this._http.get(this.url+"most_wickets")
  }

  getSchedules(){
    return this._http.get(this.url+"schedules")
  }

}
