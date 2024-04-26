import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  { path: 'articles', loadChildren: () => import('./views/articles/articles.module').then(m => m.ArticlesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
