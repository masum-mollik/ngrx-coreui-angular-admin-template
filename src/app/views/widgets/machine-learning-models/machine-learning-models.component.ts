import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation,} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModelDetailsComponent} from "../model-details/model-details.component";
import {Store} from "@ngrx/store";
import {loadMachineLearningModelsType} from "../state/machine-learning-models.action";
import {machineLearningModelList} from "../state/machine-learning-models.selector";
import {AppState} from "../state/state";
import {IMachineLearningModel} from "../models/machine-learning-models.model";
import {FormControl} from '@angular/forms';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-machine-learning-model',
  templateUrl: './machine-learning-models.component.html',
  styleUrls: ['./machine-learning-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class MachineLearningModelsComponent implements OnInit, OnDestroy {
  bsModalRef?: BsModalRef;
  cards: IMachineLearningModel[] = [];
  filteredItems: IMachineLearningModel[] = [];
  searchText = new FormControl('');
  text: string | null = '';
  unsubscribe = new Subject();

  constructor(private modalService: BsModalService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(text => {
      this.text = text;
      this.searchByTextOrDescription(text);
    });

    this.store.select(machineLearningModelList).pipe(takeUntil(this.unsubscribe)).subscribe(models => this.cards = [...models]);

    this.store.dispatch({type: loadMachineLearningModelsType});
  }

  private searchByTextOrDescription(text: string | null) {
    this.filteredItems = text ? this.cards.filter(item =>
      item.tags.includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase())) : [];
  }

  openModalWithComponent(model: IMachineLearningModel) {
    const initialState: ModalOptions = {
      initialState: {
        modelId: model.id
      },
      class: 'modal-container'
    };
    this.bsModalRef = this.modalService.show(ModelDetailsComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnDestroy(): void {
    this.unsubscribe.complete();
  }

  load() {
    this.store.dispatch({type: loadMachineLearningModelsType});
  }
}
