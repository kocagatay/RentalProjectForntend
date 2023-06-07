import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { RentalAddService } from 'src/app/services/rental-add.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {

  rentalAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
  }


  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      rentDate:["",Validators.required],
      customerId:["",Validators.required]
    })
  }
  add(){
    if(this.rentalAddForm.valid){
      let rental:Rental = Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rental).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
       }, dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
          
        }
       }
       
      )
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }

  
}
