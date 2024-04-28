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
  elementos: { marca: string, cantidad: number }[] = [];

  constructor(private vehiculoService: VehiculeService) { }

  ngOnInit(): void {
    this.getVehicules();
  }
  
  getVehicules(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculosService) => {
      this.vehicules = vehiculosService;
      this.contarMarcasConCantidad();
    });
  }

  contarMarcasConCantidad(): void {
    this.elementos = [];
    const conteoMarcas: { [marca: string]: number } = {};
    this.vehicules.forEach(vehiculo => {
      if (conteoMarcas.hasOwnProperty(vehiculo.marca)) {
        conteoMarcas[vehiculo.marca]++;
      } else {
        conteoMarcas[vehiculo.marca] = 1;
      }
    });

    for (const marca in conteoMarcas) {
      if (conteoMarcas.hasOwnProperty(marca)) {
        this.elementos.push({ marca: marca, cantidad: conteoMarcas[marca] });
      }
    }
  }
}
