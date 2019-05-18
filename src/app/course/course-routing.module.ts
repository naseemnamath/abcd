import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';

const routes: Routes = [
  {
    path:'',
    component: BussinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
