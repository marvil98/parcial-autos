import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculeService } from './vehiculo/vehiculo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, VehiculoComponent],
            providers: [{ provide: VehiculeService }],
            imports: [HttpClientTestingModule],
        }).compileComponents();
    });
        
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
        
    it('should create the app', () => {
        expect(component).toBeTruthy();
    });
        
    it('should contain logo and footer', () => {
        const compiled = fixture.nativeElement;
        const logo = compiled.querySelector('.logo');
        const footer = compiled.querySelector('.footer');
        expect(logo).toBeTruthy();
        expect(footer).toBeTruthy(); 
    });

    it('should contain app-vehiculo component', () => {
        const vehiculoComponent = fixture.nativeElement.querySelector('app-vehiculo');
        expect(vehiculoComponent).toBeTruthy();
    });
});
