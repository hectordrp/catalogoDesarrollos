import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {DataListComponent} from "./data-list/data-list.component";
import {HomeComponent} from "./home/home.component";
import {ApplicationDetailComponent} from "./applications/application-detail/application-detail.component";
import {ApplicationsComponent} from "./applications/applications.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'recipes', component: ApplicationsComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
