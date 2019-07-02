import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoBoxComponent } from './curso-box.component';

describe('CursoBoxComponent', () => {
  let component: CursoBoxComponent;
  let fixture: ComponentFixture<CursoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
