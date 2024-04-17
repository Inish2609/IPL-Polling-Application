import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-purple',
  templateUrl: './purple.component.html',
  styleUrls: ['./purple.component.css']
})
export class PurpleComponent implements OnInit {

  players:any

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.getPrupleCupHolder()
  }

  getPrupleCupHolder(){
    this._api.purpleCap().subscribe({
      next:(res)=>{
        this.players = res
        console.log(res)
      }
    })
  }

}
