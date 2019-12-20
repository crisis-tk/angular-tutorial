import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes: Routes = [
  {path:'create',     component:TaskCreateComponent},
  {path:'detail/:id', component:TaskDetailComponent},
  { path: 'user-list', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
