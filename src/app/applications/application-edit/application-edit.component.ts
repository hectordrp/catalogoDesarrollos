import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ApplicationService} from "../application.service";
import {Application} from "../application.model";

@Component({
  selector: 'app-data-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css']
})

export class ApplicationEditComponent implements OnInit {
  id: number;
  editMode = false;
  appForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private router: Router
  ) {
  }


  ngOnInit() {
    console.log('holo');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );

  }

  onSubmit() {
    const newRecipe = new Application(
      this.appForm.value['name'],
      this.appForm.value['flows'],
      this.appForm.value['path']
    );
    if (this.editMode) {
      this.applicationService.updateApp(this.id, newRecipe);
    } else {
      this.applicationService.addApp(newRecipe);
    }
    this.onCancel()
  }

  private initForm() {
    let applicationName = '';
    const applicationFlows = new FormArray([]);
    let applicationPath = '';

    if (this.editMode) {
      const application = this.applicationService.getApp(this.id);
      applicationName = application.name;
      applicationPath = application.path;

      if (application['flows']) {
        for (let flow of application.flows) {
          applicationFlows.push(
            new FormGroup({
              'name': new FormControl(flow.name, Validators.required),
              'input': new FormControl(flow.input),
              'inputTopic': new FormControl(flow.inputTopic),
              'output': new FormControl(flow.output),
              'outputTopic': new FormControl(flow.outputTopic),
              'traces': new FormControl(flow.traces),
              'description': new FormControl(flow.description)
            })
          );
        }
      }

    }

    this.appForm = new FormGroup({
      'name': new FormControl(applicationName, Validators.required),
      'flows': applicationFlows,
      'path': new FormControl(applicationPath, Validators.required)
    });
  }

  onAddFlow() {
    (<FormArray>this.appForm.get('flows')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'input': new FormControl(null),
        'inputTopic': new FormControl(null),
        'output': new FormControl(null),
        'outputTopic': new FormControl(null),
        'traces': new FormControl(null),
        'description': new FormControl(null)
      })
    );
  }

  onDeleteFlow(index:number) {
    (<FormArray>this.appForm.get('flows')).removeAt(index);

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
