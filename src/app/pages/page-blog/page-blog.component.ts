import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {

  blogData: any;

  constructor(private spaData: SpaDataService, private route: Router) { }

  ngOnInit() {
    if(!this.spaData.data.getValue()["blog"]) {
      this.route.navigate(['']);
    } else {
      this.spaData._data.subscribe($data => {                
        this.blogData = $data["blog"];
      })      
    }
  }

}
