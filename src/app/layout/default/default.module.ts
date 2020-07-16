import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { AboutComponent } from 'src/app/modules/about/about.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from 'src/app/modules/portfolio/portfolio.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  ],
  declarations: [
    DefaultComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  ]
})
export class DefaultModule { }
// 