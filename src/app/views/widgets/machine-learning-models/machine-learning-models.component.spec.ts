import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, DropdownModule, GridModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { MachineLearningModelsComponent } from './machine-learning-models.component';

describe('MachineLearningModelsComponent', () => {
  let component: MachineLearningModelsComponent;
  let fixture: ComponentFixture<MachineLearningModelsComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningModelsComponent ],
      imports: [WidgetModule, DropdownModule, IconModule, ButtonModule, ChartjsModule, GridModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(MachineLearningModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
