import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { AppRoutingModule } from './app-routing.module';



// import { FormBuilder, FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
    
   
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    AppRoutingModule,
    // FormBuilder, FormGroup
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
