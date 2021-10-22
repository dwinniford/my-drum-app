import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumBlockComponent } from './drum-block.component';

describe('DrumBlockComponent', () => {
  let component: DrumBlockComponent;
  let fixture: ComponentFixture<DrumBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
