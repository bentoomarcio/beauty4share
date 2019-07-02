import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBodyComponent } from './bar-body.component';

describe('BarBodyComponent', () => {
  let component: BarBodyComponent;
  let fixture: ComponentFixture<BarBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
