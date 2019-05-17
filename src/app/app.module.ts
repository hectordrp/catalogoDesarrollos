import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import {AppRoutingModule} from "./app-routing.module";
import { ApplicationItemComponent } from './applications/application-item/application-item.component';
import {ApplicationService} from "./applications/application.service";
import { ApplicationDetailComponent } from './applications/application-detail/application-detail.component';
import { ApplicationsComponent } from './applications/applications.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    DataListComponent,
    DataEditComponent,
    ApplicationItemComponent,
    ApplicationDetailComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
