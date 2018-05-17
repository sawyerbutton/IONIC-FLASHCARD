import { Component } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  public flipped:boolean = false;
  constructor() {
    console.log('Hello FlashCardComponent Component');
  }

  public flip(){
    this.flipped = !this.flipped;
  }

}
