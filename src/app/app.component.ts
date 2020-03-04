import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
    animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'height': '20px', 'width':'120px', 'opacity': '1'
      })),
      state('closed', style({
        'height': '0','width':'0', 'opacity': '0'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent  {
  name = 'Angular';

  
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
