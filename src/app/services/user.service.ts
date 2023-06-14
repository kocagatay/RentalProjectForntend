import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel.';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44322/api/Users/"
  constructor(private httpClient:HttpClient) { }

  getByUserEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "getbyemail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)

  }

}
