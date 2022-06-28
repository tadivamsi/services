import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component'



@NgModule({
  declarations: [
    LoginComponent,
    ViewComponent,
    EditComponent,
    AddComponent,
 
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ReactiveFormsModule
  ]
})
export class LoginModule { }
