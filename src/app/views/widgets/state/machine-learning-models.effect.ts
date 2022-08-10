import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  loadMachineLearningModelList,
  loadMachineLearningModelListSuccess,
  updateMachineLearningModeStateById,
  updateMachineLearningModeStateByIdSuccess
} from "./machine-learning-models.action";
import {map, mergeMap} from "rxjs/operators";
import {MachineLearningModelService} from "../services/machine-learning-model.service";

@Injectable()
export class MachineLearningModelsEffect {
  loadMachineLearningModels$ = createEffect(() => this.actions$.pipe(
    ofType(loadMachineLearningModelList),
    mergeMap(() => this.machineLearningModelService.getModelList().pipe(
      map((models) => loadMachineLearningModelListSuccess({machineLearningModels: models}))
    ))
    )
  );

  updateMachineLearningModelState$ = createEffect(() => this.actions$.pipe(
    ofType(updateMachineLearningModeStateById),
    mergeMap((action) => this.machineLearningModelService.updateModeStatus(action.machineLearningModelId, action.modelState).pipe(
      map((state) => updateMachineLearningModeStateByIdSuccess(state))
    ))
    )
  )

  constructor(private actions$: Actions,
              private machineLearningModelService: MachineLearningModelService) {
  }
}
