import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../shared/data-storage.service";
import {Response} from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, public dataStorageService: DataStorageService) {
  }

  onSaveData() {
    console.log('saving');
    this.dataStorageService.storeApplications()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    console.log('fetching');
    this.dataStorageService.getApplications();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
