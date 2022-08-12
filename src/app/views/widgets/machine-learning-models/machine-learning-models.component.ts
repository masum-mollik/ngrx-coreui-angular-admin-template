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
  machineLearningModels: IMachineLearningModel[] = [];
  filteredItems: IMachineLearningModel[] = [];
  searchText = new FormControl('');
  unsubscribe = new Subject();
  searchedTag: string | undefined = '';
  tags: string[] = ['computer vision', 'education', 'nlp', 'data visualization', 'classification']
  searchContext: Map<string, IMachineLearningModel[]> = new Map<string, IMachineLearningModel[]>()

  constructor(private modalService: BsModalService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(machineLearningModelList).pipe(takeUntil(this.unsubscribe)).subscribe(models => {
      this.machineLearningModels = [...models];
      this.createSearchContext();

      if (this.searchText.value && this.searchText.value.length > 0) {
        this.searchByTextOrDescription(this.searchText.value);
      }

      if (this.searchedTag) {
        this.searchByTag();
      }
    });

    this.store.dispatch({type: loadMachineLearningModelsType});

    this.searchText.valueChanges.subscribe(text => {
      this.searchByTextOrDescription(text);
    });
  }

  private searchByTextOrDescription(text: string | null) {
    this.filteredItems = text ? this.machineLearningModels.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase())) : [];
    this.searchedTag = '';
  }

  searchByTag() {
    console.log(this.searchedTag)
    if (this.searchedTag) {
      this.filteredItems = this.searchContext.get(this.searchedTag) ?? [];
      this.searchText.setValue('', {emitEvent: false});
    }
  }

  private createSearchContext() {
    this.tags.forEach(tag => {
      let matchedItemsByTag = this.machineLearningModels.filter( model => {
        return model.tags.includes(tag);
      });
      this.searchContext.set(tag, matchedItemsByTag);
    });
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
