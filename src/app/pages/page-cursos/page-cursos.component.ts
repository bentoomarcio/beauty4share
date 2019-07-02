import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-cursos',
  templateUrl: './page-cursos.component.html',
  styleUrls: ['./page-cursos.component.scss']
})
export class PageCursosComponent implements OnInit {

  courseData: any;

  constructor(private spaData: SpaDataService, private route: Router) { }

  ngOnInit() {
    if(!this.spaData.data.getValue()["course"]) {
      this.route.navigate(['']);
    } else {
      this.spaData._data.subscribe($data => {        
        this.courseData = $data["course"];
      })      
    }
  }

}
