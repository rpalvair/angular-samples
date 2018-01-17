import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { WodFormComponent } from './wod.form.component';
import { NoPrefixValidatorDirective } from './no-prefix.directive';


@NgModule({
  declarations: [
    WodFormComponent,
    NoPrefixValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [WodFormComponent]
})
export class AppModule { }
