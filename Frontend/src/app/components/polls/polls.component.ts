import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  polls:any
  results:any
  barColors: string[] = ['bg-success', 'bg-info', 'bg-warning'];

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {
    this.getAllPolls()
  }

  getAllPolls(){
    this._api.getAllPolls().subscribe({
      next:(res)=>{
        this.polls = res
        this.looping()
        // console.log(res)
      }
    })
  }

  getValue(id:number,value:string){
    this._api.AddValueToTheQuestion(id,{value:value}).subscribe({
      next:(res)=>{
        console.log(res)
        this.polls.filter((poll:any)=>{
          if (poll.id === id){
            poll.result = res
            // console.log(res)
          }
        })
      }
    })
  }

  checkIp(id:number){
    this._api.checkIp(id).subscribe({
      next:(res)=>{
        this.polls.filter((poll:any)=>{
          if (poll.id === id){
            poll.result = res
          }
        })
      }
    })
  }


  looping(){
    this.polls.forEach((element: any) => {
      this.checkIp(element.id)
    });
  }


  calculatePercentage(optionCount: any, totalCount: any): number {
    // console.log((optionCount/totalCount)*100)
    const percentage = (optionCount / totalCount) * 100;
    return parseFloat(percentage.toFixed(2));
  }
  

}
