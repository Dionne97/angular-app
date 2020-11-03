import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { OfficeViewComponent } from './office-view/office-view.component';
import { HomeComponent } from './home/home.component';
import { DialogContent } from './home/home.component';


@NgModule({
  declarations: [PagesComponent, OfficeViewComponent, HomeComponent, DialogContent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class PagesModule { }
