import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { Projects, Tools, Models, Comments } from '../apis/apis';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: Projects[];
  tools: Tools[];
  models: Models[];
  comments: Comments[];
  highlight = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllTools();
    this.getAllModels();
  }

  getAllProjects() {
    this.httpClient.get<any>(environment.allProjects).subscribe((response) => {
      this.project = response;
    });
  }

  getAllTools() {
    this.httpClient.get<any>(environment.allTools).subscribe((response) => {
      this.tools = response;
    });
  }

  getAllModels() {
    this.httpClient.get<any>(environment.allModels).subscribe((response) => {
      this.models = response;
    });
  }
}
