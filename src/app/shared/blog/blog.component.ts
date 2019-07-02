import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { VerifyService } from 'src/app/services/verify/verify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Parse = window["Parse"];
  blogs = [];

  constructor(public route: Router, private navbar: NavbarService, private spaData: SpaDataService, private verify_service: VerifyService) {    
    this.loadBlogs();
  }

  loadBlogs () {
    const Blog = this.Parse.Object.extend('Blog'),
    pQuery = new this.Parse.Query(Blog);

    if(this.verify_service.isMobile() && this.route.url.indexOf("blog-interno") < 0) pQuery.limit(6);

    pQuery.ascending("orderID");

    pQuery.find().then($array => {
      $array.forEach($blog => {

        if(this.spaData.data.getValue()["blog"] && this.spaData.data.getValue()["blog"].id === $blog.id) return;
        
        this.blogs.push({
          background: $blog.attributes.background ? $blog.attributes.background._url : undefined,
          internal: $blog.attributes.internal ? $blog.attributes.internal._url : undefined,
          category: $blog.attributes.category,
          download: $blog.attributes.download,
          image: $blog.attributes.image._url,
          content: $blog.attributes.content, /* array { title, text }*/
          link: $blog.attributes.link[0], /* { facebook, pinterest, twitter, youtube }*/
          title: $blog.attributes.title,
          date: $blog.attributes.date,
          id: $blog.id
        })
      });   
    })
  }

  changeBlog($param_event) {    
    let blogObject = this.blogs[$param_event.currentTarget.getAttribute('data-index')];
    this.spaData.setData("blog", blogObject);
    this.navbar.toggleScroll(".container-content");
    this.blogs = [];
    this.loadBlogs();
    this.route.navigate(['blog']);
  }

  ngOnInit() {
  }

}
