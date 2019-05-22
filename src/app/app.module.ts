import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "./app-routing.module";
import {ApplicationService} from "./applications/application.service";
import {ApplicationsRoutingModule} from "./applications/applications-routing.module";
import {AuthModule} from "./auth/auth.module";
import {ApplicationsModule} from "./applications/applications.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {DataStorageService} from "./shared/data-storage.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationsRoutingModule,
    AuthModule,
    ApplicationsModule,
    HttpModule
  ],
  providers: [
    ApplicationService,
    AuthService,
    AuthGuard,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
