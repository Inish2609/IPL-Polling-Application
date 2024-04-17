import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  currentImage: string = "";
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentImage()
    setInterval(()=>{
      this.changeImage();
    },3000)
  }


  images: string[] = [
    '/assets/Iplpics/gettyimages-86035624-612x612.jpg',
    '/assets/Iplpics/gettyimages-1148234325-612x612.jpg',
    '/assets/Iplpics/gettyimages-1148622193-612x612.jpg',
    '/assets/Iplpics/gettyimages-1148629913-612x612.jpg',
    '/assets/Iplpics/gettyimages-1148667121-612x612.jpg',
    '/assets/Iplpics/gettyimages-1148677952-612x612.jpg',
    '/assets/Iplpics/gettyimages-1250852977-612x612.jpg',
    '/assets/Iplpics/gettyimages-1250822597-612x612.jpg',
    '/assets/Iplpics/gettyimages-1251916268-612x612.jpg',
    '/assets/Iplpics/gettyimages-1252390648-612x612.jpg',
    '/assets/Iplpics/gettyimages-1255921256-612x612.jpg',
    '/assets/Iplpics/gettyimages-1258192528-612x612.jpg',
    '/assets/Iplpics/gettyimages-1258272831-612x612.jpg',
    '/assets/Iplpics/gettyimages-2097684676-612x612.jpg',
    '/assets/Iplpics/gettyimages-2118342568-612x612.jpg'
  ];

  setCurrentImage(){
    this.currentImage = this.images[this.currentIndex]
  }

  changeImage(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length
    this.setCurrentImage()
  }

}
