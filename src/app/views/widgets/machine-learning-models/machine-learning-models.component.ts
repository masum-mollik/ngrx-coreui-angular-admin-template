import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModelDetailsComponent} from "../model-details/model-details.component";
import {Store} from "@ngrx/store";
import {loadMachineLearningModelsType} from "../state/machine-learning-models.action";
import {machineLearningModelList} from "../state/machine-learning-models.selector";
import {AppState} from "../state/state";
import {IMachineLearningModel} from "../models/machine-learning-models.model";

@Component({
  selector: 'app-machine-learning-model',
  templateUrl: './machine-learning-models.component.html',
  styleUrls: ['./machine-learning-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MachineLearningModelsComponent implements OnInit {
  bsModalRef?: BsModalRef;
  cards: IMachineLearningModel[] = [];

  constructor(private modalService: BsModalService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(machineLearningModelList).subscribe(models => this.cards = [...models]);
    this.store.dispatch({type: loadMachineLearningModelsType});
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
