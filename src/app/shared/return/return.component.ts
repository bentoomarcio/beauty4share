import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  constructor(public navbar: NavbarService) { }

  ngOnInit() {
  }

}
