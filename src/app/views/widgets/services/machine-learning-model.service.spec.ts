import { TestBed } from '@angular/core/testing';

import { MachineLearningModelService } from './machine-learning-model.service';

describe('MachineLearningModelService', () => {
  let service: MachineLearningModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineLearningModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
