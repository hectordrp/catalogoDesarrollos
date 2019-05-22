import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';
import {ApplicationService} from "../applications/application.service";
import {Application} from "../applications/application.model";
import 'rxjs/add/operator/map';


@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private applicationService: ApplicationService,
    private authService: AuthService
    ) {}

  storeApplications() {
    const token = this.authService.getToken();
    return this.http.put('https://udemytraininghdrp.firebaseio.com/applications.json?auth=' + token, this.applicationService.getApps());
  }

  getApplications() {
    const token = this.authService.getToken();
    this.http.get('https://udemytraininghdrp.firebaseio.com/applications.json?auth=' + token)
      .map(
        (response: Response) => {
          const applications: Application[] = response.json();
          for (let application of applications) {
            if (!application['flows']) {
              application['flows'] = [];
            }
          }
          return applications;
        }
      )
      .subscribe(
        (applications: Application[]) => {
          console.log(applications);
          this.applicationService.setApps(applications);
        }
      );
  }
}
