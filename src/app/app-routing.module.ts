import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';
import { CourseModule } from "./course/course.module";
import { StaffModule } from "./staff/staff.module";

const routes: Routes = [
  {
    path:'register',
    component: RegComponent
  },
  {
    path:'view',
    component: ViewComponent
  },
  {
    path:'hai',
    loadChildren: './course/course.module#CourseModule'
  },
  {
    path:'lazy',
    loadChildren: './staff/staff.module#StaffModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
