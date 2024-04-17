import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {

  details:any
  teamDetails:any
  teamName:any
  playersDetails:any

  constructor(
    private _api:ApiService,
    private _activatedRoute:ActivatedRoute
  ) { 
    this.getTeamNameFromParams()
  }

  ngOnInit(): void {
    this.getSingleTeam()
  }

  getSingleTeam(){
    this._api.getSingleTeamDetails(this.teamName).subscribe({
      next:(res)=>{
        this.details = res
        this.teamDetails = this.details.team_details
        this.playersDetails = this.details.players
        // console.log(res)
      }
    })
  }

  getTeamNameFromParams(){
    this.teamName = this._activatedRoute.snapshot.paramMap.get('team_name')
  }

}
