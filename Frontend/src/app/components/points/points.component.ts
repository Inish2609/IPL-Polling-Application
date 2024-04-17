import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  teams:any
  startIndex: number = 0;
  pageSize: number = 3;

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.pointsTable()
  }

  pointsTable(){
    this._api.pointsTable().subscribe({
      next:(res)=>{
        this.teams = res
        // console.log(res)
      }
    })
  }

  nextPage() {
    if (this.startIndex + this.pageSize >= this.teams.length) {
        this.startIndex = 0;
    } else {
        this.startIndex += this.pageSize;
    }
}

}
