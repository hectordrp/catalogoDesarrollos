import {NgModule} from "@angular/core";
import {ApplicationsComponent} from "./applications.component";
import {ApplicationDetailComponent} from "./application-detail/application-detail.component";
import {ApplicationListComponent} from "./application-list/application-list.component";
import {ApplicationItemComponent} from "./application-item/application-item.component";
import {ApplicationStartComponent} from "./application-start/application-start.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ApplicationsRoutingModule} from "./applications-routing.module";
import {SharedModule} from "../shared/shared.module";
import {ApplicationEditComponent} from "./application-edit/application-edit.component";
import {AuthService} from "../auth/auth.service";


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationDetailComponent,
    ApplicationEditComponent,
    ApplicationListComponent,
    ApplicationStartComponent,
    ApplicationItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApplicationsRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class ApplicationsModule {}
