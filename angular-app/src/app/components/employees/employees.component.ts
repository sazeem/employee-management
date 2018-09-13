import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../shared/services/project.service';
import {PaginationService} from '../../shared/services/pagination.service';
import {Employees} from '../../models/employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees: Employees[];
  showSpinner:boolean = true;
  clickAdd:boolean = false;
  showAddButton:boolean = false;

  constructor(
    private projectService: ProjectService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }  
  getEmployees(): void {
    this.projectService.getEmployees()
    .subscribe(response => {      
      this.employees = response.items;
      this.showSpinner = false;
      if(this.paginationService._empPage === this.paginationService.totalPages){
        this.showAddButton = true;
        return;
      }
      this.showAddButton = false;
      this.clickAdd = false;
    });
  }

  clickedAdd() {
    let value = document.getElementById("add-button").innerHTML;
    if(value ==='+'){
      this.clickAdd = true;
      document.getElementById("add-button").innerHTML = '-';
    }
    else if(value ==='-'){
      this.clickAdd = false;
      document.getElementById("add-button").innerHTML = '+';
    }        
  }

  add(id:number, name: string, salary:number, mentor:number): void {
    name = name.trim();
    if (!name && !salary && !mentor) { return; }
    this.projectService.addEmployee({id:id,name:name,salary:salary,reporting_manager_id:mentor} as Employees)
      .subscribe(employee => {
        this.employees.push(employee);
        this.clickAdd = false;
        document.getElementById("add-button").innerHTML = '+';
      });
  }

  delete(employee: Employees): void {    
    this.employees = this.employees.filter(h => h !== employee);
    this.projectService.deleteHero(employee).subscribe();
  }
}
