import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-box',
  templateUrl: './teacher-box.component.html',
  styleUrls: ['./teacher-box.component.scss']
})
export class TeacherBoxComponent implements OnInit {

  @Input() profession: string;
  @Input() background: string;
  @Input() instagram: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
