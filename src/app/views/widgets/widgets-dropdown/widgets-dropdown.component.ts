import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  } from '@angular/core';

interface IMachineLearningModels {
  name?: string;
  description: string;
  state?: MachineLearningModelState;
}
enum MachineLearningModelState {
  On ='On',
  Starting = 'Starting',
  Stopping = 'Stopping',
  Off = 'Off'
}
@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsDropdownComponent implements OnInit {
  // cards = new Array(4).fill({description: ''});
  cards: IMachineLearningModels[] = [];
  constructor() {}


  ngOnInit(): void {
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({description: 'This card has supporting text below as a natural lead-in to additional content.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({description: 'This card has supporting text below as a natural lead-in to additional content.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({description: 'This card has supporting text below as a natural lead-in to additional content.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
    this.cards.push({description: 'This card has supporting text below as a natural lead-in to additional content.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'})
    this.cards.push({ description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'})
  }
}
