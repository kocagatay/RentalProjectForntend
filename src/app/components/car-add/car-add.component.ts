import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{

  carAddForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService : CarService,
    private toastrService : ToastrService
  ){

  }

  ngOnInit(): void {
    this.createCarAddForm();

  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      modelName : ["", Validators.required],
      dailyPrice : ["",Validators.required],
      modelYear : ["",Validators.required],
      brandId : ["",Validators.required],
      description : ["",Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
       }, dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
          
        }
       }
       
       
       //dataError=>{
      //   console.log(dataError)
      //   this.toastrService.error(dataError.error) //hatanın nerede olduğunu yakalamak için yazdık örnek koddur.
      //}
      )

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }

}
