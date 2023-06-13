import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cardetails: CarDetail[] = [];
  dataLoaded = false;
  baseUrl = 'https://localhost:44354/uploads/images/'

  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      } else {
        return;
      }
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.cardetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  

  

    // if(cardetail.carId===1002){
    //   this.toastrService.error("Hata","Bu ürün eklenemez")       HATA ALMAK İÇİN BİR ÖRNEKLEME KOD
    // }else{
    //   this.toastrService.success("Sepete eklendi",cardetail.modelName)
    // }
  
}
