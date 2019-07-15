import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-top',
  templateUrl: './bar-top.component.html',
  styleUrls: ['./bar-top.component.scss']
})
export class BarTopComponent implements OnInit {
  
  Parse = window["Parse"];
  link = "";

  constructor() { }

  ngOnInit() {
    const Links = this.Parse.Object.extend('Links'),
    pQuery = new this.Parse.Query(Links);
    pQuery.find("pMWKvO2UzC").then($param_array => {
      let array_objects = $param_array.filter($param_object => {
        return $param_object.attributes.name === "topo"
      });

      let object = array_objects[0] ? array_objects[0] : false;      
      this.link = object.attributes.link;
    })
  }

}
