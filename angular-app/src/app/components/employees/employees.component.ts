import { Component, OnInit, Inject } from '@angular/core';
import {ProjectService} from '../../shared/services/project.service';
import {PaginationService} from '../../shared/services/pagination.service';
import {Employees} from '../../models/employees';
import {map} from 'rxjs/operators'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

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
  
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  constructor(
    private projectService: ProjectService,
    private paginationService: PaginationService,
    public dialog: MatDialog,
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
      .pipe(map(employee => {
        this.employees.push(employee);
        this.clickAdd = false;
        document.getElementById("add-button").innerHTML = '+';
      }))
      .subscribe();
  }

  delete(employee: Employees): void {    
    this.employees = this.employees.filter(emp => emp !== employee);
    this.projectService.deleteHero(employee).subscribe();
  }
}

@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.html',
})
export class DialogComponent{  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
