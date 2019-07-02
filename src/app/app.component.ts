import { SidenavService } from './services/sidenav/sidenav.service';
import { NavbarService } from './services/navbar/navbar.service';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Beauty4Share | A Melhor Escola de Beleza de São Paulo';
  return: string = 'hidden';
  state: string;

  @ViewChild(NgScrollbar) scrollbar: NgScrollbar;

  Parse = window["Parse"];

  constructor(public sidenav: SidenavService, private route: Router, private navbar: NavbarService) {    

    this.Parse.serverURL = 'https://b4s.back4app.io';    
    this.Parse.initialize(environment.parse.keys.id, environment.parse.keys.js);
    
    this.Parse.User.logIn(environment.parse.user.login, environment.parse.user.password, {});

    this.route.events.subscribe($event => {
      if($event instanceof NavigationEnd) {
        this.scrollbar.scrollToTop();
        this.resetReturn();
      }
    })

    sidenav._state.subscribe($state => {
      this.state = $state;
    })

    navbar._scrollTop.subscribe($data => {
      if($data.state == true) {
        if($data.element) {          
          this.scrollbar.scrollToElement($data.element);
        } else {
          this.scrollbar.scrollToTop();
        }
        this.navbar.scrollTop.next({ state: false, element: '' });
      }
    })

  }

  resetReturn() {
    this.return = "hidden";
  }

  ngOnInit() {
    this.scrollbar.scrollable.elementScrolled().subscribe($scroll => {      
      this.return = $scroll.currentTarget["scrollTop"] > $scroll.currentTarget["offsetHeight"]/2 ? 'visible' : 'hidden';
    })
  }

  closeSidenav() {
    this.sidenav.state.next("closed");
  }
}
