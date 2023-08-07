import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './Component/history/history.component';
import { userGuard } from './Guards/user.guard';

const routes: Routes = [
  {
    path:'',
    component:HistoryComponent,
    canActivate : [userGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
