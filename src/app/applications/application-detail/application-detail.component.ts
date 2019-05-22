import { Component, OnInit } from '@angular/core';
import {Application} from "../application.model";
import {ApplicationService} from "../application.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  application: Application;
  id: number;
  constructor(private applicationService: ApplicationService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params ) => {
          this.id = +params['id'];
          this.application = this.applicationService.getApp(this.id);
        }
      );
  }

  onEditApplication() {
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  onDeleteApplication() {
    this.applicationService.deleteApp(this.id);
    this.router.navigate(['/recipes']);
  }

}
