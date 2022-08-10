import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from "rxjs/operators";
import {IMachineLearningModel, MachineLearningModelState} from "../models/machine-learning-models.model";


@Injectable({
  providedIn: 'root'
})
export class MachineLearningModelService {
  private models: IMachineLearningModel[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getModelList(): Observable<IMachineLearningModel[]> {
    return this.httpClient.get<IMachineLearningModel[]>('http://localhost:3000/models')
      .pipe(
        tap(_ => console.log('fetched'))
      );
  }

  getModelById(modelId: string): Observable<IMachineLearningModel> {
    return this.httpClient.get<IMachineLearningModel>(`http://localhost:3000/models/${modelId}`)
      .pipe(
        tap(_ => console.log('fetched'))
      );
  }

  updateModeStatus(modelId: string, state: MachineLearningModelState): Observable<{machineLearningModelId: string, modelState: MachineLearningModelState}> {
    const subject = new BehaviorSubject({machineLearningModelId: modelId, modelState: state});
    state = (state === MachineLearningModelState.Starting) ? MachineLearningModelState.On : MachineLearningModelState.Off;
    setTimeout(() => subject.next({machineLearningModelId: modelId, modelState: state}), 5000);
    return subject;
  }
}
