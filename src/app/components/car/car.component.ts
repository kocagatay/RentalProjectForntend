import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carimage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardetails: CarDetail[];
  brands: Brand[];
  colors: Color[];
  imageOfPath: string;
  dataLoaded = false;
  carFilterText = '';
  brandFilterText = "";
  colorFilterText = "";

  filterBrandId: number = 1;
  filterColorId: number = 1;

  carsDataLoaded: boolean = false;
  brandsDataLoaded: boolean = false;
  colorsDataLoaded: boolean = false;

  baseUrl = 'https://localhost:44354/uploads/images/';
  carImages: CarImage[] = [];

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private cardetailService: CardetailService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute, // mevcut route url'de kısmının güncel halini okumak ve buna göre işlem yapmak için. brande bastığımızda oradakileri gösterecek ya
    private toastrService: ToastrService, // notificationlar için bu service injectte edilip kullanılıyor.
   
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //params parametrelerden geliyor.
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
    
  }

  getCars() {
    //console.log("Api request başladı"); BU YORUM SATIRLARI ASENKRON ÇALIŞTIĞINI GÖSTERMEK İÇİN YAZILMIŞTIR.
    this.cardetailService.getAllCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      //console.log("Api request bitti");
      this.dataLoaded = true;
    });
    //console.log("Metod bitti");
  }

  getCarsByFilter(brandId: number, colorId: number){
    this.carService.getCarsByFilter(brandId, colorId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }


  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      const imagePath = response.data[2].imagePath;
      this.imageOfPath = this.baseUrl + imagePath;
    });
    return this.imageOfPath;
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  

    
  }

