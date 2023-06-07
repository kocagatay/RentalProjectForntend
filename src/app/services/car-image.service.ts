import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carimage';


@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44354/api/';


  constructor(private httpClient: HttpClient) {}

 

  getImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }



}
