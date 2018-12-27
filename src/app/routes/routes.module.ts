import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { ProjectsComponent } from '../layout/projects/projects.component';
import { ArticleComponent } from '../layout/article/article.component';
import { AboutComponent } from '../layout/about/about.component';
import { DetailComponent } from '../layout/detail/detail.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'article', component:  ArticleComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'detail', component: DetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
