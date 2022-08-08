import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  } from '@angular/core';
import {MachineLearningModelService} from "../services/machine-learning-model.service";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {ModelDetailsComponent} from "../model-details/model-details.component";

export interface IMachineLearningModel {
  id: string;
  name: string;
  description: string;
  state: MachineLearningModelState;
  tags: string[];
  url: string;
}
export enum MachineLearningModelState {
  On ='On',
  Starting = 'Starting',
  Stopping = 'Stopping',
  Off = 'Off'
}
@Component({
  selector: 'app-machine-learning-model',
  templateUrl: './machine-learning-models.component.html',
  styleUrls: ['./machine-learning-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MachineLearningModelsComponent implements OnInit {
  bsModalRef?: BsModalRef;
  cards: IMachineLearningModel[] = [];
  constructor(private machineLearningModelService: MachineLearningModelService,
              private modalService: BsModalService) {}

  ngOnInit(): void {
    this.machineLearningModelService.getModelList().subscribe((response: IMachineLearningModel[]) => {
      console.log(response);
      this.cards = [...response];
    });
  }
  openModalWithComponent(model: IMachineLearningModel) {
    const initialState: ModalOptions = {
      initialState: {
        modelId: model.id
      }
    };
    this.bsModalRef = this.modalService.show(ModelDetailsComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
