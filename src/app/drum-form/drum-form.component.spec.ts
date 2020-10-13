import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumFormComponent } from './drum-form.component';

describe('DrumFormComponent', () => {
  let component: DrumFormComponent;
  let fixture: ComponentFixture<DrumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
