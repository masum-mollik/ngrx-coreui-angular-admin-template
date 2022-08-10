import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMachineLearningModel} from "../models/machine-learning-models.model";

export const selectMachineLearningModels = createFeatureSelector<IMachineLearningModel[]>('machineLearningModels');

export const machineLearningModelList = createSelector(
  selectMachineLearningModels,
  machineLearningModels => machineLearningModels
);

export const machineLearningModelById = (modelId: string) => createSelector(
  selectMachineLearningModels,
  machineLearningModels => {
    let index = machineLearningModels.findIndex(machineLearningModel => machineLearningModel.id === modelId);
    if (index > -1) return machineLearningModels[index]
    return {} as IMachineLearningModel;
  }
);
