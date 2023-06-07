import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel.';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44354/api/auth/';
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', loginModel);
  }

  logout(){
    this.localStorageService.delete('token');
    this.localStorageService.delete('user');
  }

  register(registerModel : RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'register',registerModel)
  }

  isAuthenticated() {
    if (this.localStorageService.get('token')) {
      return true;
    } else {
      return false;
    }
  }
}
