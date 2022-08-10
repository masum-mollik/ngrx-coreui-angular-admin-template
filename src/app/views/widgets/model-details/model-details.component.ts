import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {MachineLearningModelService} from "../services/machine-learning-model.service";
import {IMachineLearningModel, MachineLearningModelState} from "../models/machine-learning-models.model";
import {Store} from "@ngrx/store";
import {AppState} from "../state/state";
import {machineLearningModelById} from "../state/machine-learning-models.selector";
import {updateMachineLearningModeStateById} from "../state/machine-learning-models.action";

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
  modelId: string = '';
  model: IMachineLearningModel;

  constructor(public bsModalRef: BsModalRef,
              private machineLearningModelService: MachineLearningModelService,
              private store: Store<AppState>) {
    this.model = {} as IMachineLearningModel;
  }

  ngOnInit(): void {
    this.store.select(machineLearningModelById(this.modelId)).subscribe((model: IMachineLearningModel) => {
      this.model = model;
      this.model.state = MachineLearningModelState.Starting;
      return;
    });
  }

  updateStatus() {
    if (this.model.state === MachineLearningModelState.Off) {
      this.store.dispatch(updateMachineLearningModeStateById({
        machineLearningModelId: this.model.id,
        modelState: MachineLearningModelState.Starting
      }));
    }

    if (this.model.state === MachineLearningModelState.On) {
      this.store.dispatch(updateMachineLearningModeStateById({
        machineLearningModelId: this.model.id,
        modelState: MachineLearningModelState.Stopping
      }));
    }
  }
}
