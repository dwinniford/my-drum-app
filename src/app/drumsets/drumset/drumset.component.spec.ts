import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumsetComponent } from './drumset.component';

describe('DrumsetComponent', () => {
  let component: DrumsetComponent;
  let fixture: ComponentFixture<DrumsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
