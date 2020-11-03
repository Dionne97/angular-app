import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { OfficeViewComponent } from './office-view/office-view.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      {
        path: 'office-view',
        component: OfficeViewComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
