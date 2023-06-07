import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44354/api/rentals/';
  constructor(private httpClient:HttpClient) { }


  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getbycarid?carId=" + carId
    console.log(newPath)
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental)
  }

  


}
