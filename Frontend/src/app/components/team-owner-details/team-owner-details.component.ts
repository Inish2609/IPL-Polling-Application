import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-owner-details',
  templateUrl: './team-owner-details.component.html',
  styleUrls: ['./team-owner-details.component.css']
})
export class TeamOwnerDetailsComponent implements OnInit {

  constructor() { }

  @Input() Details:any

  ngOnInit(): void {
  }


}
