import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesModule } from './Modules/employees/employees.module';
import { AllListComponent } from './Modules/all-list/all-list.component';
import { AddComponent } from './Modules/add/add.component';
import { EditComponent } from './Modules/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
