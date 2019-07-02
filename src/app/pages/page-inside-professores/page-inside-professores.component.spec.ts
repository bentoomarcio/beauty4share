import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsideProfessoresComponent } from './page-inside-professores.component';

describe('PageInsideProfessoresComponent', () => {
  let component: PageInsideProfessoresComponent;
  let fixture: ComponentFixture<PageInsideProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsideProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsideProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
