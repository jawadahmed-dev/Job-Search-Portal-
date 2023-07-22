import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';

const routes: Routes = [
  {
    path:'guest',
    component: GuestLayoutComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
