import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  dataLoaded = false;


  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,

  ) {}

  ngOnInit(): void {
    
    this.getRentals();
  
  }

  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data
      this.dataLoaded = true;
    })
  }

  // createRentalAddForm() {
  //   this.rentalAddForm = this.formBuilder.group({
  //     cardNumber: ["", Validators.required],
  //     cardOwnerName: ["", Validators.required],
  //     date: ["", Validators.required],
  //     cvc: ["", Validators.required],
  //     pickUpDate: ["", Validators.required],
  //     returnDate: ["", Validators.required]
  //   });
  // }

  

  // getCarDetails(carId: number) {
  //   this.carDetailService.getCarDetailsByCarId(carId).subscribe((result) => {
  //     this.cardetails = result.data;
  //     this.setPriceAndDays();
  //   });
  // }

  // setPriceAndDays() {
  //   this.cardetails.map((c) => {
  //     this.totalPrice = c.dailyPrice;
  //   });
  // }

  // checkReturnDate() {
  //   let diffInDays: number = this.calculateDayDiffrence(
  //     this.returnDate,
  //     this.pickUpDate
  //   );
  //   if (diffInDays < 0) {
  //     this.returnDate = this.pickUpDate;
  //     this.toastrService.error(
  //       'Teslim tarihi kiralama tarihinden önce olamaz',
  //       'HATA'
  //     );
  //     diffInDays = 1;
  //   }
  //   if (diffInDays == 0) {
  //     diffInDays++;
  //   }
  //   this.priceCalculate(diffInDays);
  // }

  // checkValuesAndGetPay(carId: number) {
  //   this.rentalService.getRentalsByCarId(carId).subscribe((result) => {
  //     this.rentals = result.data;
  //     if (this.rentals.length == 0) this.router.navigateByUrl('/pay/' + carId);
  //     else this.getCheckRental(carId);
  //   });
  // }

  // calculateDayDiffrence(dateForReturn: string, dateForPickUp: string) {
  //   const dateForReturnMS = this.convertToMs(dateForReturn);
  //   const dateForPickUpMS = this.convertToMs(dateForPickUp);
  //   const diffInMilliseconds = dateForReturnMS - dateForPickUpMS;
  //   return diffInMilliseconds / (1000 * 60 * 60 * 24);
  // }

  // convertToMs(date: string): number {
  //   const data = date.split('-');
  //   const year = parseInt(data[0]);
  //   const month = parseInt(data[1]);
  //   const day = parseInt(data[2]);
  //   return new Date(year, month, day).getTime();
  // }

  // getCheckRental(carId: number) {
  //   this.rentals.map((value) => {
  //     const diff = this.calculateDayDiffrence(
  //       value.returnDate
  //         .toString()
  //         .substring(0, value.returnDate.toString().length - 9),
  //       this.pickUpDate
  //     );
  //     if (value.returnDate == null || diff > 0) {
  //       this.toastrService.error('Bu araç şuan kiralamada', 'HATA');
  //       return;
  //     } else {
  //       this.router.navigateByUrl('/pay/' + carId);
  //     }
  //   });
  // }

  // priceCalculate(dayCount: number) {
  //   this.cardetails.map((t) => (this.totalPrice = dayCount * t.dailyPrice));
  // }
}
