import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images : {team_name:string,image:string}[] = [
    {team_name:"Chennai Super Kings",image:"/assets/teamLogos/CSKoutline.png"},
    {team_name:"Delhi Capitals",image:"/assets/teamLogos/DCoutline.png"},
    {team_name:"Gujarat Titans",image:"/assets/teamLogos/GToutline.png"},
    {team_name:"Kolkata Knight Riders",image:"/assets/teamLogos/KKRoutline.png"},
    {team_name:"Lucknow Super Giants",image:"/assets/teamLogos/LSGoutline.png"},
    {team_name:"Mumbai Indians",image:"/assets/teamLogos/MIoutline.png"},
    {team_name:"Punjab Kings",image:"/assets/teamLogos/PBKSoutline.png"},
    {team_name:"Royal Challengers Bangalore",image:"/assets/teamLogos/RCBoutline.png"},
    {team_name:"Rajasthan Royals",image:"/assets/teamLogos/RRoutline.png"},
    {team_name:"Sunrisers Hyderabad",image:"/assets/teamLogos/SRHoutline.png"}
  ]

}
