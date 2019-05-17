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

}
