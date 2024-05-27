import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './Modules/add/add.component';
import { EditComponent } from './Modules/edit/edit.component';

const routes: Routes = [{ path: 'employees', loadChildren: () => import('./Modules/employees/employees.module').then(m => m.EmployeesModule) },
  {path: '',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
