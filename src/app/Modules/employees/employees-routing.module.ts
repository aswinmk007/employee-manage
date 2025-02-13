import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListComponent } from '../all-list/all-list.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

const routes: Routes = [{ path: '', component: AllListComponent },
  {path:'add',component:AddComponent},
  {path:':id/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
