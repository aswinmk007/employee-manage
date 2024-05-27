import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employees.model';
import { ApiService } from '../employees/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  employee:employeeModel = {}
  allemployees:any = []
   constructor(private api:ApiService,private router:Router){}
   ngOnInit(): void {
     this.api.getAllemployeesAPI().subscribe((result:any)=>{
      this.allemployees = result
     })
   }
   addemployee(){
    const existingEmployee = this.allemployees.find((item:any)=>item.id==this.employee.id)
    if(existingEmployee){
      alert("Id already exist!!! use unique id to add employee")
    }else{
      this.api.saveEmployeeAPI(this.employee).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfully added`)
          this.router.navigateByUrl('/employees')

          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })

    }
    
   }
  cancel(){
    this.employee = {}
  }
}
