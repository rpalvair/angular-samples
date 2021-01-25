import { WodFormComponent } from './wod/create/wod.form.component';
import { AppComponent } from './app.component';
import { WodViewComponent } from './wod/view/wod.view.component';
import { WodComponent } from './wod/wod.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoPrefixValidatorDirective } from './directives/no-prefix.directive';
import { ConverterComponent } from './converter/converter.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiMessageService } from './converter/message/In.memory.api.message.service';
import { Base64Service } from './converter/base64/base64.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    WodComponent,
    WodViewComponent,
    AppComponent,
    WodFormComponent,
    NoPrefixValidatorDirective,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiMessageService, {passThruUnknownUrl: true})
  ],
  providers: [Base64Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
