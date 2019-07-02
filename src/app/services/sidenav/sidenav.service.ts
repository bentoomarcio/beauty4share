import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  state = new BehaviorSubject('closed');
  _state = this.state.asObservable();

  constructor() { }

  toggleState() {
    this.state.next(this.state.getValue() === 'closed' ? 'opened' : 'closed');
    if(this.state.getValue() == "opened") {
      window.scrollTo(0,0);
    }
  }
}
