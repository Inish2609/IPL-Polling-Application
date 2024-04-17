import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {

  players:any

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.getOrangeCupHolder()
  }

  getOrangeCupHolder(){
    this._api.orangeCap().subscribe({
      next:(res)=>{
        this.players = res
        // console.log(res)
      }
    })
  }

}
