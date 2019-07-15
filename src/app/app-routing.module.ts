import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* NORMAL PAGES */
  import { PageProfessoresComponent } from './pages/page-professores/page-professores.component';
  import { PageCursosComponent } from './pages/page-cursos/page-cursos.component';
  import { PageBlogComponent } from './pages/page-blog/page-blog.component';

/* INSIDE PAGES */
  import { PageInsideProfessoresComponent } from './pages/page-inside-professores/page-inside-professores.component';
  import { PageInsideCursosComponent } from './pages/page-inside-cursos/page-inside-cursos.component';
  import { PageInsideBlogComponent } from './pages/page-inside-blog/page-inside-blog.component';

const routes: Routes = [
  { path: 'professores-interno', component: PageInsideProfessoresComponent, pathMatch: 'full' },
  { path: 'cursos-interno', component: PageInsideCursosComponent, pathMatch: 'full' },
  { path: 'blog-interno', component: PageInsideBlogComponent, pathMatch: 'full' },
  { path: 'professores', component: PageProfessoresComponent, pathMatch: 'full' },
  { path: 'cursos', component: PageCursosComponent, pathMatch: 'full' },
  { path: 'blog', component: PageBlogComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '404', component: HomeComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
