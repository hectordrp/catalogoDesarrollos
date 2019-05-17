import {Component, OnDestroy, OnInit} from '@angular/core';
import {Application} from "../applications/application.model";
import {Subscription} from "rxjs";
import {ApplicationService} from "../applications/application.service";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit, OnDestroy {
  applications: Application[];
  subscription: Subscription;

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.applications = this.applicationService.getApps();
    this.subscription = this.applicationService.appsChanged
      .subscribe(
        (applications: Application[]) => {
          this.applications = applications;
        }
      );
  }

  // onNewApp() {
  //   this.router.navigate(['new'], {relativeTo: this.route});
  //
  // }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
