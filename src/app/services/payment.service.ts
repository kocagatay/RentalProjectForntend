import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = 'https://localhost:44354/api/payments/';

  constructor(private httpClient:HttpClient) { }

  getPayments():Observable<ListResponseModel<Payment>>{
    let newUrl=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Payment>>(newUrl)
  }
  
  add(pay:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"pay",pay)
  }
}
