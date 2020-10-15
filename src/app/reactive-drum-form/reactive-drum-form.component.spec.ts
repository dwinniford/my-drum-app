import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrumFormComponent } from './reactive-drum-form.component';

describe('ReactiveDrumFormComponent', () => {
  let component: ReactiveDrumFormComponent;
  let fixture: ComponentFixture<ReactiveDrumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDrumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDrumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
