import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule

    
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
