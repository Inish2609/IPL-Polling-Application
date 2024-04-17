import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  teams:any

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.getPointsTable()
  }


  getPointsTable(){
    this._api.pointsTable().subscribe({
      next:(res)=>{
        this.teams = res
        // console.log(res)
      }
    })
  }

}
