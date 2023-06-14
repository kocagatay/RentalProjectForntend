import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private toastrService : ToastrService,
    
  ){}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(data=>{
        this.toastrService.success(data.message)
        localStorage.setItem("token",data.data.token)
      }, dataError=>{
        this.toastrService.error(dataError.error) //bunu bu haliyle anlaman lazım f12'ye gelen hata kodunu toastr servis vasıtası ile arayüzde göstermiş oluyoruz.
      })
    }
  }

}
