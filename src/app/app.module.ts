import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC58Pa1xnAA7rcKkgAcwX28G0-gyWLpryU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
