import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss']
})
export class BlogBoxComponent implements OnInit {

  @Input() background: string;
  @Input() category: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
