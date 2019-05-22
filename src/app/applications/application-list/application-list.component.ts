import {Component, OnDestroy, OnInit} from '@angular/core';
import {Application} from "../application.model";
import {Subscription} from "rxjs";
import {ApplicationService} from "../application.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-data-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})

export class ApplicationListComponent implements OnInit, OnDestroy {
  applications: Application[];
  subscription: Subscription;

  constructor(public applicationService: ApplicationService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.applications = this.applicationService.getApps();
    this.subscription = this.applicationService.appsChanged
      .subscribe(
        (applications: Application[]) => {
          this.applications = applications;
        }
      );
  }

  onNewApp() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
