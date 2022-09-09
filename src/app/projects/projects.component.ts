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
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: Projects[];
  byModel: Projects[];
  byTool: Projects[];
  tools: Tools[];
  models: Models[];
  comments: Comments[];

  selectedModel: string = '';
  selectedTool: string = '';

  // cloudinary
  cloud: string = environment.cloudinary;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllTools();
    this.getAllModels();
    this.projectsByModels();
    this.projectsByTools();
  }

  @Output()
  selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  onSelectedChanged() {}

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
  projectsByModels() {
    this.httpClient
      .get<any>(environment.projectsByModels + this.selectedModel)
      .subscribe((response) => {
        this.byModel = response;
      });
  }
  projectsByTools() {
    this.httpClient
      .get<any>(environment.projectsByTools + this.selectedTool)
      .subscribe((response) => {
        this.byTool = response;
      });
  }

  closeResult: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modelShow = false;
  toolShow = false;
  AllShow = true;
  showToolList = false;
  showModelList = false;
  showAllList = false;

  toggleTool() {
    this.toolShow = true;
    this.modelShow = false;
    this.AllShow = false;
  }

  toggleModel() {
    this.modelShow = true;
    this.toolShow = false;
    this.AllShow = false;
  }

  toggleAll() {
    this.modelShow = false;
    this.toolShow = false;
    this.AllShow = true;
  }

  toggleToolList() {
    this.showToolList = !this.showToolList;
    this.showModelList = false;
    this.showAllList = false;
  }
  toggleModelList() {
    this.showToolList = false;
    this.showModelList = !this.showModelList;
    this.showAllList = false;
  }
  toggleAllList() {
    this.showToolList = false;
    this.showModelList = false;
    this.showAllList = !this.showAllList;
  }
}
