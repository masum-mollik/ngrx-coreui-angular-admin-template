import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {MachineLearningModelService} from "../services/machine-learning-model.service";
import {IMachineLearningModel} from "../machine-learning-models/machine-learning-models.component";

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
  modelId: string = '';
  model: IMachineLearningModel;
  constructor(public bsModalRef: BsModalRef,
              private machineLearningModelService: MachineLearningModelService) {
    this.model = {} as IMachineLearningModel;
  }

  ngOnInit(): void {
    this.machineLearningModelService.getModelById(this.modelId).subscribe((response: IMachineLearningModel) => {
      if (response) {
        this.model = response;
      }
    });
  }

}
