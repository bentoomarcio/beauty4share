import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  
  Parse = window["Parse"];
  partners = [];
  
  constructor() {
    
    const Partner = this.Parse.Object.extend('Partner'),
    pQuery = new this.Parse.Query(Partner);

    pQuery.ascending("orderID");

    pQuery.find().then($array => {
      $array.forEach($partner => {
        this.partners.push({ image: $partner.attributes.image._url });
      })
    })

  }

  ngOnInit() {
    
  }

}
