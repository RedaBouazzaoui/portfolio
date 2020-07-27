import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CommentComponent } from './modules/comment/comment.component';
// import { FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  { path: '',
component: DefaultComponent,
children:[
  {
    path:'',
    component: AboutComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'comment',
    component: CommentComponent
  }
]


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // FormBuilder, FormGroup 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
