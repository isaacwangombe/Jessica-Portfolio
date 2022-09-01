import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { Projects } from '../apis/apis';
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
  selector: 'app-highlighted',
  templateUrl: './highlighted.component.html',
  styleUrls: ['./highlighted.component.css'],
})
export class HighlightedComponent implements OnInit {
  project: Projects[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.httpClient.get<any>(environment.allProjects).subscribe((response) => {
      this.project = response;
    });
  }
}
