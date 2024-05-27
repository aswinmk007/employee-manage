import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employees.model';
import { ApiService } from '../employees/services/api.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit{
  allemployees:employeeModel[] = []

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllemployees()
  }

  getAllemployees(){
    this.api.getAllemployeesAPI().subscribe((result:any)=>{
      this.allemployees = result
      console.log(this.allemployees);
      
    })
  }

  deleteEmployee(id:any){
    this.api.removeEmployeeAPI(id).subscribe((result:any)=>{
      this.getAllemployees()
    })
  }



}
