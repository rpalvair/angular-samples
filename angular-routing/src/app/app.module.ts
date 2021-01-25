import { WodFormComponent } from './wod/create/wod.form.component';
import { AppComponent } from './app.component';
import { WodViewComponent } from './wod/view/wod.view.component';
import { WodComponent } from './wod/wod.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NoPrefixValidatorDirective } from './directives/no-prefix.directive';

const appRoutes: Routes = [
  { path: 'wod/:name', component: WodViewComponent },
  {
    path: 'wodList',
    component: WodComponent,
    data: { title: 'Wod List' }
  },
  {
    path: 'create',
    component: WodFormComponent,
    data: { title: 'Create wod' }
  },
  {
    path: '',
    redirectTo: '/wodList',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    WodComponent,
    WodViewComponent,
    AppComponent,
    WodFormComponent,
    NoPrefixValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
