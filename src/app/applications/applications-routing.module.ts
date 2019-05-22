import {ApplicationsComponent} from "./applications.component";
import {RouterModule, Routes} from "@angular/router";
import {ApplicationDetailComponent} from "./application-detail/application-detail.component";
import {NgModule} from "@angular/core";
import {ApplicationStartComponent} from "./application-start/application-start.component";
import {ApplicationEditComponent} from "./application-edit/application-edit.component";
import {AuthGuard} from "../auth/auth-guard.service";

const applicationsRoutes: Routes = [
  { path: 'applications', component: ApplicationsComponent, children: [
      { path: '', component: ApplicationStartComponent },
      { path: 'new', component: ApplicationEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: ApplicationDetailComponent },
      { path: ':id/edit', component: ApplicationEditComponent, canActivate: [AuthGuard] }
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(applicationsRoutes)
  ],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {
}
