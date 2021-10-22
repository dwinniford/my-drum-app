import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrumsetComponent } from './edit-drumset.component';

describe('EditDrumsetComponent', () => {
  let component: EditDrumsetComponent;
  let fixture: ComponentFixture<EditDrumsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrumsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrumsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
