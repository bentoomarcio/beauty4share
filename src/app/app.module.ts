import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material';
import { NgScrollbarModule } from 'ngx-scrollbar';

/* NGX ScrollTo */
  import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

/* Youtube */
  import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PageCursosComponent } from './pages/page-cursos/page-cursos.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';

import { PageInsideProfessoresComponent } from './pages/page-inside-professores/page-inside-professores.component';
import { PageInsideCursosComponent } from './pages/page-inside-cursos/page-inside-cursos.component';
import { PageProfessoresComponent } from './pages/page-professores/page-professores.component';
import { PageInsideBlogComponent } from './pages/page-inside-blog/page-inside-blog.component';

import { LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent,    
    HomeComponent,
    AppComponent,
    PageBlogComponent,
    PageCursosComponent,
    PageProfessoresComponent,
    PageInsideBlogComponent,
    PageInsideCursosComponent,
    PageInsideProfessoresComponent    
  ],
  imports: [
    NgxYoutubePlayerModule.forRoot(),
    ScrollToModule.forRoot(),
    NgScrollbarModule,
    MatSidenavModule,
    AppRoutingModule,  
    BrowserModule,
    SharedModule,
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
