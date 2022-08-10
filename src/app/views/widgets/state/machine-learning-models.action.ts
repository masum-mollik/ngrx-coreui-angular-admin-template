import {createAction, props} from "@ngrx/store";
import {IMachineLearningModel, MachineLearningModelState} from "../models/machine-learning-models.model";

export const loadMachineLearningModelsType = '[Machine Learning Model List] Load Models';
export const loadMachineLearningModelsSuccessType = '[Machine Learning Model List] Load Models Success';
export const startMachineLearningModeByIdType = '[Update Machine Learning Model State] Update Model State';
export const startMachineLearningModeByIdSuccessType = '[Update Machine Learning Model State] Update Model State Success';

export const loadMachineLearningModelList = createAction(
  loadMachineLearningModelsType
);

export const loadMachineLearningModelListSuccess = createAction(
  loadMachineLearningModelsSuccessType,
  props<{ machineLearningModels: IMachineLearningModel[] }>()
);

export const updateMachineLearningModeStateById = createAction(
  startMachineLearningModeByIdType,
  props<{ machineLearningModelId: string, modelState: MachineLearningModelState }>()
);

export const updateMachineLearningModeStateByIdSuccess = createAction(
  startMachineLearningModeByIdSuccessType,
  props<{ machineLearningModelId: string, modelState: MachineLearningModelState }>()
)
