import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment.development';
import { Vehiculo } from '../vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

}
