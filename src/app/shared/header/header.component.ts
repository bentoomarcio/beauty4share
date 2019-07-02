import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() show: string;

  constructor(public sidenav: SidenavService) { }

  ngOnInit() {
  }

}
