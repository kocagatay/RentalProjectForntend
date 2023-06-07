import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  
  carUpdateForm: UntypedFormGroup;

  brands: Brand[];
  colors: Color[];
  //engines: Engine[]; bunları da ekleyelim güzel olur. html'de optionslarını sildim eklemen lazım
  //fuels: Fuel[];
  
  car: Car = {
    carId: 0,
    brandId: 0,
    colorId: 0,
    modelName: "",
    dailyPrice: 0,
    description: "",
    modelYear: 0 
  };

constructor(
  private formBuilder: UntypedFormBuilder,
  private brandService: BrandService,
  private colorService: ColorService,
  private carService: CarService,
  private toastrService: ToastrService,
  private activatedRoute: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
    this.getCarById(params["carId"]);
  })
  this.getBrands();
  this.getColors();
  this.createCarAddForm();
}
createCarAddForm() {
  this.carUpdateForm = this.formBuilder.group({
    brandId: ["", Validators.required],
    brandName: ["", Validators.required],
    colorId: ["", Validators.required],
    modelName: ["", Validators.required],
    modelYear: ["", Validators.required],
    dailyPrice: ["", Validators.required],
    description: ["", Validators.required]
  })
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

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;
      this.carUpdateForm.controls['brandId'].setValue(this.car.brandId);
      this.carUpdateForm.controls['brandName'].setValue(this.car.brandId);
      this.carUpdateForm.controls['colorId'].setValue(this.car.colorId);
      this.carUpdateForm.controls['modelName'].setValue(this.car.modelName);
      this.carUpdateForm.controls['modelYear'].setValue(this.car.modelYear);
      this.carUpdateForm.controls['dailyPrice'].setValue(this.car.dailyPrice);
      this.carUpdateForm.controls['description'].setValue(this.car.description);
    });
  }

  update() {
    let carModel: Car = Object.assign({carId: this.car.carId}, this.carUpdateForm.value);
    if (this.carUpdateForm.valid) {
      this.carService.update(carModel).subscribe((data) => {
          this.toastrService.success("Car is updated successfully.");
        },
        (dataError) => {
          if (dataError.error.Errors) {
            if (dataError.error.Errors.length > 0) {
              for (let i = 0; i < dataError.error.Errors.length; i++) {
                this.toastrService.error(dataError.error.Errors[i]);
              }
            }
          } else {
            this.toastrService.error(dataError.error.Message);
          }
        });
    } else {
      this.toastrService.error("Complete the form!");
    }
  }
  



}
