import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../../employees.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url="https://employee-mange-sever.onrender.com"


  constructor(private http:HttpClient) { }
  saveEmployeeAPI(employee:employeeModel){
    return this.http.post(`${this.server_url}/allemployees`,employee)
  }

  getAllemployeesAPI(){
    return this.http.get(`${this.server_url}/allemployees`)
  }

  getEmployeeAPI(id:any){
    return this.http.get(`${this.server_url}/allemployees/${id}`)

  }

  updateEmployeeAPI(employee:employeeModel){
    return this.http.put(`${this.server_url}/allemployees/${employee.id}`,employee)
  }

  removeEmployeeAPI(id:any){
    return this.http.delete(`${this.server_url}/allemployees/${id}`)
  }

  
}
