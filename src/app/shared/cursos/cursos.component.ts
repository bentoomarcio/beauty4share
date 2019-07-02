import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { VerifyService } from 'src/app/services/verify/verify.service';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  isMobile = this.verify.isMobile();
  Parse = window["Parse"];
  courses = [];

  @ViewChild('carousel_view') carousel_view: NguCarousel<any>;

  carousel_config: NguCarouselConfig = {
    /* interval: { timing: 3000 }, */
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    touch: this.verify.isMobile(),
    point: {
      hideOnSingleSlide: true,
      visible: true
    },
    velocity: 0.2,
    loop: false
  }

  array_carousel: any;

  constructor(private spaData: SpaDataService, private route: Router, private navbar: NavbarService, private verify: VerifyService, private change_detector: ChangeDetectorRef) {
    const Course = this.Parse.Object.extend('Course'),
    pQuery = new this.Parse.Query(Course);

    if(this.isMobile && this.route.url.indexOf("cursos-interno") < 0) pQuery.limit(6);

    pQuery.ascending("orderID");

    pQuery.find().then($array => {      
      $array.forEach($course => {        
        this.courses.push({
          background: $course.attributes.background ? $course.attributes.background._url : undefined,
          description: $course.attributes.description,
          disclaimer: $course.attributes.disclaimer, /* array */
          payment: $course.attributes.payment[0], /* array { cash, installment, value } */
          subtitle: $course.attributes.subtitle,
          category: $course.attributes.category,
          teachers: $course.attributes.teachers,
          image: $course.attributes.image._url,
          content: $course.attributes.content, /* array */
          video: $course.attributes.video,
          title: $course.attributes.title,
          date: $course.attributes.date,
          time: $course.attributes.time /* array { title, schedule, exception, days } */
        })
      });

      let _courses = this.courses.slice(0),
      slide_count = Math.ceil(this.courses.length/6),
      array_six = [];      

      for(let indexX = 0; indexX < slide_count; indexX++) {
        array_six[indexX] = [];
          for(let indexY = 0; indexY < 6; indexY++) {
            if(_courses.length > 0) {              
              array_six[indexX].push(_courses.shift());
            }
          }
      }      
      
      this.array_carousel = array_six;
      this.change_detector.detectChanges();      
    })

  }

  changeCurso($param_event) {
    let courseObject;
    if(!this.isMobile && this.route.url.indexOf("cursos-interno") < 0) {
      let num_carousel = $param_event.currentTarget.closest(".carousel-slide").getAttribute("data-index"),
      num_item = $param_event.currentTarget.getAttribute("data-index");
      courseObject = this.array_carousel[num_carousel][num_item];
    } else {      
      courseObject = this.courses[$param_event.currentTarget.getAttribute("data-index")];
    }

    this.spaData.setData("course", courseObject);
    this.navbar.toggleScroll(".container-content");
    this.route.navigate(['cursos']);
  }

  ngOnInit() {
  }

}
