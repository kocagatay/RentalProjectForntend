import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalAddService {

  apiUrl = 'https://localhost:44354/api/rentals/';
  constructor(private httpClient:HttpClient) { }

  
  
}
