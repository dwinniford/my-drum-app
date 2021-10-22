import { TestBed } from '@angular/core/testing';

import { DrumSetupService } from './drum-setup.service';

describe('DrumSetupService', () => {
  let service: DrumSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrumSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
