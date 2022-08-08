import { Injectable } from '@angular/core';
import {IMachineLearningModel} from "../machine-learning-models/machine-learning-models.component";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MachineLearningModelService {
  private models: IMachineLearningModel[] = [];
  constructor(private httpClient: HttpClient) { }

  getModelList(): Observable<IMachineLearningModel[]>{
    return this.httpClient.get<IMachineLearningModel[]>('http://localhost:3000/models')
      .pipe(
        tap(_=>console.log('fetched'))
      );
  }
  getModelById(modelId: string): Observable<IMachineLearningModel>{
    return this.httpClient.get<IMachineLearningModel>(`http://localhost:3000/models/${modelId}`)
      .pipe(
        tap(_=>console.log('fetched'))
      );
  }
}
