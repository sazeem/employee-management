import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesComponent } from './employees.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagerComponent } from '../../shared/pager/pager.component';

fdescribe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        EmployeesComponent,
        LoadingSpinnerComponent, 
        PagerComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# Should Create Employees Component', () => {
    expect(component).toBeTruthy();
  });

  it('# Should Have Method Called getEmployees', () => {
    expect(component.getEmployees).toBeTruthy();
    expect(component.getEmployees).toEqual(jasmine.any(Function));
  });
});
