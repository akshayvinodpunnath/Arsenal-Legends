import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListLegendsComponent } from './list-legends/list-legends.component';
import { DisplayLegendComponent } from './display-legend/display-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLegendsComponent,
    DisplayLegendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
