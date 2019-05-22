import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Application, Flow} from "./application.model";

@Injectable()
export class ApplicationService {

  appsChanged = new Subject<Application[]>();

  constructor() {
  }


  private applications: Application[] = [
    new Application(
      "ACTPAK",
      [new Flow(
        "ACTPAK.cmf",
        "QL.ENTRADA.COLA",
        "ACPTOPICO",
        "D.A",
        "ACTSALIDA",
        false,
        "Integracion ACTPAK"
      )],
      "git/DesarrolloIntegracion/ACTPAK"
    ),
    new Application(
      "Sfera",
      [new Flow(
        "sfera.cmf",
        "QL.BROKER.SFERA",
        "SFERA",
        "D.A",
        "N/A",
        false,
        "Integracion Sfera"
      )],
      "Starteam/proyectos/Sfera"
    )
  ];

  getApps() {
    return this.applications.slice();
  };

  getApp(index: number) {
    return this.applications[index];
  }

  setApps(recipes: Application[]) {
    this.applications = recipes;
    this.appsChanged.next(this.applications.slice());
  }

  updateApp(index: number, newApp: Application) {
    this.applications[index] = newApp;
    this.appsChanged.next(this.applications.slice());

  }

  addApp(application: Application) {
    this.applications.push(application);
    this.appsChanged.next(this.applications.slice());
  }

  deleteApp(index: number) {
    this.applications.splice(index, 1);
    this.appsChanged.next(this.applications.slice());
  }
}
