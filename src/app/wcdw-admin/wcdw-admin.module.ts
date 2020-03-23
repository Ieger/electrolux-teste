import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbInstanceComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WcdwRoutingModule } from './wcdw-admin.routing';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularCoreModule } from '../ng.core.module';
import { CommonService } from '../providers/common.service';



@NgModule({
  declarations: [DbInstanceComponent, HomeComponent],
  imports: [
    CommonModule,
    WcdwRoutingModule,
    MaterialModule,
    AngularCoreModule
  ],
  providers: [CommonService]
})
export class WcdwAdminModule { }
