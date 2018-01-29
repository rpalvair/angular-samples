
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ConverterComponent } from './presentation/converter/converter.component';
import { Base64Service } from './application/base64/base64.service';



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
