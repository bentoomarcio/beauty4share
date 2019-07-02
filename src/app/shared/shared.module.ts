/* Angular Material */
  import { MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

/* NGX ScrollTo */
  import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'; 

import { TeacherBoxComponent } from './teachers/teacher-box/teacher-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoBoxComponent } from './cursos/curso-box/curso-box.component';
import { BlogBoxComponent } from './blog/blog-box/blog-box.component';
import { PartnersComponent } from './partners/partners.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BarBodyComponent } from './bar-body/bar-body.component';
import { BarTopComponent } from './bar-top/bar-top.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { CursosComponent } from './cursos/cursos.component';
import { BlogComponent } from './blog/blog.component';
import { NguCarouselModule } from '@ngu/carousel';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReturnComponent } from './return/return.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [ReturnComponent, ScrollToModule, BrowserAnimationsModule, HeaderComponent, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, NguCarouselModule, RouterModule, ButtonComponent, BarTopComponent, BarBodyComponent,  FooterComponent, CursosComponent, TeachersComponent, BlogComponent, PartnersComponent],
  declarations: [HeaderComponent, ButtonComponent, BarTopComponent, BarBodyComponent, FooterComponent, CursosComponent, CursoBoxComponent, TeachersComponent, TeacherBoxComponent, BlogComponent, BlogBoxComponent, PartnersComponent, ReturnComponent],
  imports: [ReactiveFormsModule, ScrollToModule.forRoot() ,BrowserAnimationsModule, CommonModule, MatSnackBarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, NguCarouselModule, RouterModule]
})
export class SharedModule { }