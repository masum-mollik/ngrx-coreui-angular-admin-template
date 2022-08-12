import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BadgeModule, ButtonModule, CardModule, GridModule, SharedModule, WidgetModule, SpinnerModule} from '@coreui/angular';
import {IconModule} from '@coreui/icons-angular';

import {DocsComponentsModule} from '@docs-components/docs-components.module';

import {MachineLearningModelsRoutingModule} from './machine-learning-models-routing.module';
import {MachineLearningModelsComponent} from './machine-learning-models/machine-learning-models.component';
import {MachineLearningModelService} from "./services/machine-learning-model.service";
import {HttpClientModule} from "@angular/common/http";
import {ModelDetailsComponent} from './model-details/model-details.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StateTextDirective} from "./directives/state-text.directive";

@NgModule({
  declarations: [
    MachineLearningModelsComponent,
    ModelDetailsComponent,
    StateTextDirective
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
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SpinnerModule
  ],
  exports: [
    MachineLearningModelsComponent,
  ],
  providers: [
    MachineLearningModelService,
    StateTextDirective
  ]
})
export class MachineLearningModelModule {
}
