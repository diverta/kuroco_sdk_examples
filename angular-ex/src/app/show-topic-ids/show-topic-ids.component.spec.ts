import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopicIDsComponent } from './show-topic-ids.component';

describe('ShowTopicIDsComponent', () => {
  let component: ShowTopicIDsComponent;
  let fixture: ComponentFixture<ShowTopicIDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopicIDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopicIDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
