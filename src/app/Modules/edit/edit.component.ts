import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../employees/services/api.service';
import { employeeModel } from '../employees.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  employee:employeeModel={}
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
 ngOnInit(): void {
  this.route.params.subscribe((result:any)=>{
    console.log(result);
    const {id} = result
    console.log(id);
    this.getEmployeeDetails(id)
    
    
  })
   
 }

 getEmployeeDetails(id:any){
  this.api.getEmployeeAPI(id).subscribe((result:any)=>{
    this.employee = result
    console.log(this.employee);
    
  })
 }

 updateEmployee(){
  this.api.updateEmployeeAPI(this.employee).subscribe((result:any)=>{
    alert("Updated successfully!!!")
    this.router.navigateByUrl('/employees')
  })
 }

 cancel(id:any){
  this.getEmployeeDetails(id)
 }
  
}

 



