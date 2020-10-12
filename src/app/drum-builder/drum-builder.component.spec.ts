import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumBuilderComponent } from './drum-builder.component';

describe('DrumBuilderComponent', () => {
  let component: DrumBuilderComponent;
  let fixture: ComponentFixture<DrumBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
