import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/main/main.component';
import { ProductsComponent } from './Component/products/products.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

const routes: Routes = [
  {
    path:'',
    component :MainComponent
  },{
    path:'products',
    component: ProductsComponent
  }
  ,{
    path:'signIn',
    component: LoginComponent
  }
  ,{
    path:'Register',
    component: RegisterComponent
  }
  ,{
    path:'ResetPassword',
    component: ForgetPasswordComponent
  }
  ,{
    path:'ProductDetails/:Id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
