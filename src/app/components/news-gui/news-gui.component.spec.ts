import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGuiComponent } from './news-gui.component';

describe('NewsGuiComponent', () => {
  let component: NewsGuiComponent;
  let fixture: ComponentFixture<NewsGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
