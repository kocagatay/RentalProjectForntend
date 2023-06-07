import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  loginForm : FormGroup;
  constructor(
    private toastrService : ToastrService,
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private localStorageService : LocalStorageService
    
  ){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(data=>{
        this.toastrService.info(data.message)
        this.localStorageService.add("token",data.data.token)
      }, dataError=>{
        this.toastrService.error(dataError.error);
      }
      )
    }
  }



}
