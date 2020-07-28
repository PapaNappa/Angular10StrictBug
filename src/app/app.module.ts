import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AComponent } from './a.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
