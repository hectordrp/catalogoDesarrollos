import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [    RouterModule.forRoot(appRoutes)  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
