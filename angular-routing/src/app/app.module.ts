import { AppComponent } from './app.component';
import { WodComponent } from './wod.component';
import { WodListComponent } from './wod-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'wod/:name', component: WodComponent },
  {
    path: 'wodList',
    component: WodListComponent,
    data: { title: 'Wod List' }
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
    WodListComponent,
    WodComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
