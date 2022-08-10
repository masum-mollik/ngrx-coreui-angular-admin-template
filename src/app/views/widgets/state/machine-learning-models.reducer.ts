import {createReducer, on} from "@ngrx/store";
import {
  loadMachineLearningModelList,
  loadMachineLearningModelListSuccess,
  updateMachineLearningModeStateById, updateMachineLearningModeStateByIdSuccess
} from "./machine-learning-models.action";
import {IMachineLearningModel, MachineLearningModelState} from "../models/machine-learning-models.model";

export const initialState: IMachineLearningModel[] = [];

export const machineLearningModelReducer = createReducer(
  initialState,
  on(loadMachineLearningModelList, (state) => state),
  on(loadMachineLearningModelListSuccess, (state, {machineLearningModels}) => machineLearningModels),
  on(updateMachineLearningModeStateById, (state, {machineLearningModelId, modelState}) => {
    let newState = state.map(item => {
      if (item.id !== machineLearningModelId) {
        return item;
      }
      let updatedItem = {...item};
      updatedItem.state = modelState;
      return updatedItem;
    });
    return [...newState];
  }),
  on(updateMachineLearningModeStateByIdSuccess, (state, {machineLearningModelId, modelState}) => {
    let newState = state.map(item => {
      if (item.id !== machineLearningModelId) {
        return item;
      }
      let updatedItem = {...item};
      updatedItem.state = modelState;
      return updatedItem;
    });
    return [...newState];
  })
);
