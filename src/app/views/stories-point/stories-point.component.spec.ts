import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPointComponent } from './stories-point.component';

describe('StoriesPointComponent', () => {
  let component: StoriesPointComponent;
  let fixture: ComponentFixture<StoriesPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
