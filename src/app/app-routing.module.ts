import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { WodFormComponent } from './wod/create/wod.form.component';
import { WodViewComponent } from './wod/view/wod.view.component';
import { WodComponent } from './wod/wod.component';

const routes: Routes = [
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
    path: 'convert',
    component: ConverterComponent,
    data: { title: 'Convert in base 64' }
  },
  {
    path: '',
    redirectTo: '/wodList',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
