import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculeService } from './vehiculo.service';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehicules: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculeService) { }

  getVehicules(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculosService) => {
      this.vehicules = vehiculosService;
    });
  }

  ngOnInit(): void {
    this.getVehicules();
  }
}
