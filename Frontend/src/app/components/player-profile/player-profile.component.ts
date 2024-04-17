import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  @Input() Details:any

  constructor() { }

  ngOnInit(): void {
  }

}
