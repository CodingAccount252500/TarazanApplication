import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './Modules/index/index.module';
import { ProductsComponent } from './Modules/index/Component/products/products.component';
import { UserModule } from './Modules/user/user.module';

const routes: Routes = [
  {
    path:'',
    loadChildren : () => IndexModule 
  },{
    path:'User',
    loadChildren : () => UserModule 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
