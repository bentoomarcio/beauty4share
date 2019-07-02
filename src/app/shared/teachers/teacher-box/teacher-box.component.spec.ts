import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBoxComponent } from './teacher-box.component';

describe('TeacherBoxComponent', () => {
  let component: TeacherBoxComponent;
  let fixture: ComponentFixture<TeacherBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
