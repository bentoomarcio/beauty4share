import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsideBlogComponent } from './page-inside-blog.component';

describe('PageInsideBlogComponent', () => {
  let component: PageInsideBlogComponent;
  let fixture: ComponentFixture<PageInsideBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInsideBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInsideBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
