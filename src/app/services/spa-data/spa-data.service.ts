import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaDataService {

  data = new BehaviorSubject({});
  _data = this.data.asObservable();

  constructor() { }

  setData($property: string, $value: object) {
    let tempSpa = this.data.getValue(),
    tempProp = $property,
    tempData = $value;

    tempSpa[tempProp] = tempData;

    this.data.next(tempSpa);    
  }
}
