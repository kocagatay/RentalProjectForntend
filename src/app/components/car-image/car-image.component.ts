import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  dataLoaded = false;

  constructor(
    private carImageService: CarImageService,
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.carImageService.getImages().subscribe(response=>{
      this.carImages = response.data;
    })
  }

}
