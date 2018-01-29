import { Base64Service } from './base64.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ConverterComponent } from './converter.component';



@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Base64Service],
  bootstrap: [ConverterComponent]
})
export class AppModule { }
