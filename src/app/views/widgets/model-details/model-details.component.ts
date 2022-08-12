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
  isUpdatingState: boolean = false;

  constructor(public bsModalRef: BsModalRef,
              private machineLearningModelService: MachineLearningModelService,
              private store: Store<AppState>) {
    this.model = {} as IMachineLearningModel;
  }

  ngOnInit(): void {
    JSON.stringify({ foo: "sample", bar: "sample" }, null, 4)
    this.store.select(machineLearningModelById(this.modelId)).subscribe((model: IMachineLearningModel) => {
      this.model = {...model};
      this.isUpdatingState = !(this.model.state === 'On' || this.model.state === 'Off')
      return;
    });
  }

  updateStatus() {
    if (this.model.state === MachineLearningModelState.Off || this.model.state === MachineLearningModelState.On) {
      this.store.dispatch(updateMachineLearningModeStateById({
        machineLearningModelId: this.model.id,
        modelState: this.model.state === MachineLearningModelState.Off ? MachineLearningModelState.Starting : MachineLearningModelState.Stopping
      }));
    }
  }
}
