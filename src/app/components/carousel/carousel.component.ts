import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { VerifyService } from 'src/app/services/verify/verify.service';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  Parse = window["Parse"];  
  banners = [];  

  @ViewChild('carousel_view') carousel_view: NguCarousel<any>;

  carousel_config: NguCarouselConfig = {
    /* interval: { timing: 3000 }, */
    point: { hideOnSingleSlide: true, visible: true },
    interval: { timing: 2000, initialDelay: 1000 },
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    touch: this.verify.isMobile(),
    velocity: 0.2,
    loop: false
  }

  array_carousel: any;
  
  icons: object = {
    "know" : "add_circle_outline",
    "download": "cloud_download"
  }

  constructor(private change_detector: ChangeDetectorRef, private verify: VerifyService) {
    const Banner = this.Parse.Object.extend('Banner'),
    pQuery = new this.Parse.Query(Banner);

    pQuery.ascending("orderID");

    pQuery.find().then($array => {
      $array.forEach($banner => {
        this.banners.push({
          subtitle: $banner.attributes.subtitle,
          image: $banner.attributes.image._url,
          button: $banner.attributes.button,
          extra: $banner.attributes.extra,
          title: $banner.attributes.title
        })
      });

      this.array_carousel = this.banners;
      this.change_detector.detectChanges();
    })
    
  }
  
  ngOnInit() {}


}
