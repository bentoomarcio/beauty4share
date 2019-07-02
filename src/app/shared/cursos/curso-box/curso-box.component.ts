import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-box',
  templateUrl: './curso-box.component.html',
  styleUrls: ['./curso-box.component.scss']
})
export class CursoBoxComponent implements OnInit {

  @Input() background: string;
  @Input() category: string;
  @Input() title: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
