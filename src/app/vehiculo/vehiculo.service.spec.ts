import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehiculeService } from './vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculeService', () => {
  let service: VehiculeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculeService]
    });
    service = TestBed.inject(VehiculeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected vehicles from getVehiculos', () => {
    const expectedVehicles: Vehiculo[] = [
      {
        "id": "1",
        "marca": "Renault",
        "linea": "Kangoo",
        "referencia": "VU Express",
        "modelo": 2017,
        "kilometraje": 93272,
        "color": "Blanco",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
    },
    {
        "id": "2",
        "marca": "Chevrolet",
        "linea": "Spark",
        "referencia": "Life",
        "modelo": 2018,
        "kilometraje": 55926,
        "color": "Plata",
        "imagen": "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
    },
    ];

    service.getVehiculos().subscribe(vehicles => {
      expect(vehicles).toEqual(expectedVehicles);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');

    req.flush(expectedVehicles);
  });
});