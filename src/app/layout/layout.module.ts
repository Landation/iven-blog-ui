import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailComponent } from './detail/detail.component';
import { RoutesModule } from '../routes/routes.module';

@NgModule({
  declarations: [HomeComponent, ArticleComponent, AboutComponent, ProjectsComponent, DetailComponent],
  imports: [
    CommonModule,
    RoutesModule
  ]
})
export class LayoutModule { }
