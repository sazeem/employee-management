import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RolesComponent } from './roles.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagerComponent } from '../../shared/pager/pager.component';

fdescribe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        RolesComponent,
        LoadingSpinnerComponent, 
        PagerComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# Should Create Roles Component', () => {
    expect(component).toBeTruthy();
  });

  it('# Should Have Method Called getRoles', () => {
    expect(component.getRoles).toBeTruthy();
    expect(component.getRoles).toEqual(jasmine.any(Function));
  });
});
