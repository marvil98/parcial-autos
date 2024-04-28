import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculeService } from './vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from '../vehiculo';

describe('VehiculoComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let VehiculeServiceStub: Partial<VehiculeService>;

  beforeEach(async () => {
    VehiculeServiceStub = {
      getVehiculos: jasmine.createSpy().and.returnValue(of([
        { id: 1, marca: 'Marca1', linea: 'Linea1', modelo: 'Modelo1' },
        { id: 2, marca: 'Marca2', linea: 'Linea2', modelo: 'Modelo2' },
        { id: 3, marca: 'Marca3', linea: 'Linea3', modelo: 'Modelo3' }
      ]))
    };

    await TestBed.configureTestingModule({
      declarations: [VehiculoComponent],
      providers: [{ provide: VehiculeService, useValue: VehiculeServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display table with 3 rows plus header', () => {
    const compiled = fixture.nativeElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
    const tableHead = compiled.querySelectorAll('thead tr');
    expect(tableHead.length).toBe(1);
  });

  it('should count vehicle brands correctly', () => {
    const vehiculos: Vehiculo[] = [
        {
            "id": '1',
            "marca": "Renault",
            "linea": "Kangoo",
            "referencia": "VU Express",
            "modelo": 2017,
            "kilometraje": 93272,
            "color": "Blanco",
            "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
        },
        {
            "id": '2',
            "marca": "Toyota",
            "linea": "Spark",
            "referencia": "Life",
            "modelo": 2018,
            "kilometraje": 55926,
            "color": "Plata",
            "imagen": "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
        },
        {
            "id": '3',
            "marca": "Toyota",
            "linea": "Sail",
            "referencia": "LT Sedan",
            "modelo": 2016,
            "kilometraje": 94321,
            "color": "Rojo",
            "imagen": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png"
        },
        {
            "id": '4',
            "marca": "Renault",
            "linea": "Sandero",
            "referencia": "New Authentique Life",
            "modelo": 2020,
            "kilometraje": 25629,
            "color": "Rojo",
            "imagen": "https://cdn.group.renault.com/ren/co/vehicles/sandero/home/nuevo-renault-sandero-rojo-fuego.jpg.ximg.xsmall.jpg/0b9611c786.jpg"
        },
    ];

    component.vehicules = vehiculos;

    component.contarMarcasConCantidad();

    expect(component.elementos.length).toBe(2);
    expect(component.elementos[0].marca).toBe('Renault');
    expect(component.elementos[0].cantidad).toBe(2);
    expect(component.elementos[1].marca).toBe('Toyota');
    expect(component.elementos[1].cantidad).toBe(2);
  });
});
