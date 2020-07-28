import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-a *ngIf="false$ | async"></app-a>
  `
})
export class AppComponent {
  false$ = of(false);

  constructor() {
  }
}
