export enum MachineLearningModelState {
  On = 'On',
  Starting = 'Starting',
  Stopping = 'Stopping',
  Off = 'Off'
}

export interface IMachineLearningModel {
  id: string;
  name: string;
  description: string;
  state: MachineLearningModelState;
  tags: string[];
  url: string;
  requestBodyJson: Object;
  responseBodyJson: Object;
}
