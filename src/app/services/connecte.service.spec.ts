import { TestBed } from '@angular/core/testing';

import { ConnecteService } from './connecte.service';

describe('ConnecteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnecteService = TestBed.get(ConnecteService);
    expect(service).toBeTruthy();
  });
});
