import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ path: '', component: LoginComponent },
                        {path:'view',component:ViewComponent},
                        {path:"edit",component:EditComponent},
                        {path:"edit/:id", component: EditComponent},
                        {path:"add", component:AddComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
