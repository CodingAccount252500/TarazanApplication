import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { UsersComponent } from './Component/users/users.component';
import { CreateComponent } from './Component/Product/create/create.component';
import { UpdateComponent } from './Component/Product/update/update.component';
import { IndexComponent } from './Component/Product/index/index.component';
import { CategoryComponent } from './Component/category/category.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    CreateComponent,
    UpdateComponent,
    IndexComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
