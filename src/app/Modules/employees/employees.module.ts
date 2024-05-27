import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeesModule { }
