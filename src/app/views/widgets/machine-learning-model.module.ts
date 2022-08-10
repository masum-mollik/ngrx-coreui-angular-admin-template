import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BadgeModule, ButtonModule, CardModule, GridModule, SharedModule, WidgetModule} from '@coreui/angular';
import {IconModule} from '@coreui/icons-angular';

import {DocsComponentsModule} from '@docs-components/docs-components.module';

import {MachineLearningModelsRoutingModule} from './machine-learning-models-routing.module';
import {MachineLearningModelsComponent} from './machine-learning-models/machine-learning-models.component';
import {MachineLearningModelService} from "./services/machine-learning-model.service";
import {HttpClientModule} from "@angular/common/http";
import {ModelDetailsComponent} from './model-details/model-details.component';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    MachineLearningModelsComponent,
    ModelDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MachineLearningModelsRoutingModule,
    GridModule,
    WidgetModule,
    IconModule,
    SharedModule,
    ButtonModule,
    CardModule,
    DocsComponentsModule,
    BadgeModule,
    ModalModule.forRoot()
  ],
  exports: [
    MachineLearningModelsComponent,
  ],
  providers: [
    MachineLearningModelService
  ]
})
export class MachineLearningModelModule {
}
