import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-professores',
  templateUrl: './page-professores.component.html',
  styleUrls: ['./page-professores.component.scss']
})
export class PageProfessoresComponent implements OnInit {

  teacherData: any;

  constructor(private route: Router, private spaData: SpaDataService) { }

  ngOnInit() {
    if(!this.spaData.data.getValue()["teacher"]) {
      this.route.navigate(['']);
    } else {
      this.spaData._data.subscribe($data => {        
        this.teacherData = $data["teacher"];
      })      
    }
  }

}
