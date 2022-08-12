import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MachineLearningModelState} from "../models/machine-learning-models.model";

@Directive({
  selector: '[appStateText]'
})
export class StateTextDirective implements OnChanges {
  @Input('appStateText') state: MachineLearningModelState | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['state']) {
      this.onStateChange();
    }
  }
  onStateChange() {
    let elements = this.el.nativeElement.getElementsByClassName('button-text');
    switch (this.state) {
      case MachineLearningModelState.On:
        elements[0].innerText = 'Stop';
        break;
      case MachineLearningModelState.Off:
        elements[0].innerText = 'Start ';
        break;
      case MachineLearningModelState.Starting:
        elements[0].innerText = 'Starting';
        break;
      case MachineLearningModelState.Stopping:
        elements[0].innerText = 'Stopping';
        break;
      default:
        elements[0].innerText = 'Update';
        break
    }
  }
}
