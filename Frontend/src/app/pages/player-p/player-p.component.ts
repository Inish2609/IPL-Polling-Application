import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-player-p',
  templateUrl: './player-p.component.html',
  styleUrls: ['./player-p.component.css']
})
export class PlayerPComponent implements OnInit {

  id:any
  playerDetail:any

  constructor(
    private _api:ApiService,
    private _activatedRoute:ActivatedRoute
  ) {
    this.getIdFromParams()
   }

  ngOnInit(): void {
    this.getPlayerDetails()
  }

  getIdFromParams(){
    this.id = this._activatedRoute.snapshot.paramMap.get('id')
  }

  getPlayerDetails(){
    this._api.getSinglePlayerDetails(this.id).subscribe({
      next:(res)=>{
        this.playerDetail = res
        // console.log(res)
      },
      error:()=>{
        console.log("Getting Player Details Failed")
      }
    })
  }

}
