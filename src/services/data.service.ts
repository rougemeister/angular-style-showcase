import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Car } from '../model/model';



@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  private apiUrl = '../assets/data/data.json'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }



  // Fetch all cars
  fetchCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

 
}