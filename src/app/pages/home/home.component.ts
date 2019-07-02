import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { SpaDataService } from 'src/app/services/spa-data/spa-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navbar: NavbarService, private spaData: SpaDataService) { }

  ngOnInit() {
    this.navbar.scrollTop.next({ state: true, element: '' });
    this.spaData.data.next({});
  }

}
