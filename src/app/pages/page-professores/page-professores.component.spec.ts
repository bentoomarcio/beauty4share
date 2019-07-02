import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfessoresComponent } from './page-professores.component';

describe('PageProfessoresComponent', () => {
  let component: PageProfessoresComponent;
  let fixture: ComponentFixture<PageProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
