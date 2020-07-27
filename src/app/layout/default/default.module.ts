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
import{HttpClientModule} from '@angular/common/http';
import { CommentComponent } from 'src/app/modules/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

   
  ],
  declarations: [
    DefaultComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    CommentComponent
  ]
})
export class DefaultModule { }
// 