import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-body',
  templateUrl: './bar-body.component.html',
  styleUrls: ['./bar-body.component.scss']
})
export class BarBodyComponent implements OnInit {

  @Input() maxWidth: string;
  @Input() image: string;
  @Input() style:string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
