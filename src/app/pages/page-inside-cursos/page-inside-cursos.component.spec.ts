import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsideCursosComponent } from './page-inside-cursos.component';

describe('PageInsideCursosComponent', () => {
  let component: PageInsideCursosComponent;
  let fixture: ComponentFixture<PageInsideCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsideCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsideCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
