import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsComponent } from './projects.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagerComponent } from '../../shared/pager/pager.component';

fdescribe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        ProjectsComponent,
        LoadingSpinnerComponent, 
        PagerComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# Should Create Projects Component', () => {
    expect(component).toBeTruthy();
  });

  it('# Should Have Method Called getProjects', () => {
    expect(component.getProjects).toBeTruthy();
    expect(component.getProjects).toEqual(jasmine.any(Function));
  });
});
