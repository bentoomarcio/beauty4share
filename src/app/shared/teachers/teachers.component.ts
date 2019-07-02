import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { VerifyService } from 'src/app/services/verify/verify.service';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  isMobile = this.verify.isMobile();
  Parse = window["Parse"];
  teachers = [];

  @ViewChild('carousel_view') carousel_view: NguCarousel<any>;

  carousel_config: NguCarouselConfig = {
    /* interval: { timing: 3000 }, */
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    touch: this.verify.isMobile(),
    point: {
      hideOnSingleSlide: true,
      visible: true
    },
    velocity: 0.2,
    loop: false
  }

  array_carousel: any;

  constructor(private verify: VerifyService, private spaData: SpaDataService, private navbar: NavbarService, public route: Router, private change_detector: ChangeDetectorRef) {
    const Teacher = this.Parse.Object.extend('Teacher'),
    pQuery = new this.Parse.Query(Teacher);

    if(this.isMobile && this.route.url.indexOf("professores-interno") < 0) pQuery.limit(4);

    pQuery.ascending("orderID");

    pQuery.find().then($array => {
      $array.forEach($teacher => {
        this.teachers.push({
          profession: $teacher.attributes.profession,
          instagram: $teacher.attributes.instagram,
          image: $teacher.attributes.image._url,
          content: $teacher.attributes.content, /* array */
          link: $teacher.attributes.link[0] /* { facebook, pinterest, youtube, instagram }*/
        })
      });      

      this.array_carousel = this.teachers;
      this.change_detector.detectChanges();
    })
  }

  changeTeacher($param_event) {    
    let teacherObject = this.teachers[$param_event.currentTarget.getAttribute('data-index')];
    this.spaData.setData("teacher", teacherObject);
    this.navbar.toggleScroll(".container-content");
    this.route.navigate(['professores']);
  }

  ngOnInit() {
  }

}
