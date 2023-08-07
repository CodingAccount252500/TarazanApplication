import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './Component/alert/alert.component';
import { ConfirmDialogComponent } from './Component/confirm-dialog/confirm-dialog.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AlertComponent,
    ConfirmDialogComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(), 
    MatSidenavModule,
    NgxChartsModule
  ],
  exports:[
    AlertComponent,
    ConfirmDialogComponent,
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule, 
    NgxChartsModule
  ]
})
export class SharedModule { }
