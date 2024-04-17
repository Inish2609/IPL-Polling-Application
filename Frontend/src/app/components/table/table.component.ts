import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  schedules:any

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.getSchedule()
  }

  getSchedule(){
    this._api.getSchedules().subscribe({
      next:(res)=>{
        this.schedules = res
        console.log(res)
      }
    })
  }

}
