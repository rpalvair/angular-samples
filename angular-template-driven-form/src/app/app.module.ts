import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { WodFormComponent } from './wod.form.component';


@NgModule({
  declarations: [
    WodFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [WodFormComponent]
})
export class AppModule { }
