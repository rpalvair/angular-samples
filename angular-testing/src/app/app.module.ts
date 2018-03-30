
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ConverterComponent } from './presentation/converter/converter.component';
import { Base64Service } from './application/base64/base64.service';
import { InMemoryApiMessageService } from './application/In.memory.api.message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiMessageService, {passThruUnknownUrl: true}),
  ],
  providers: [Base64Service],
  bootstrap: [ConverterComponent]
})
export class AppModule { }
