import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  scrollTop = new BehaviorSubject({ state: false,  element: '' });
  _scrollTop = this.scrollTop.asObservable();

  constructor() { }

  toggleScroll($param_element = null) {    
    $param_element ? this.scrollTop.next({ state: true, element: $param_element }) : this.scrollTop.next({ state: true, element: '' });
  }
}
