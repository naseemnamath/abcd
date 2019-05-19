import { TestBed } from '@angular/core/testing';

import { UseriaService } from './useria.service';

describe('UseriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseriaService = TestBed.get(UseriaService);
    expect(service).toBeTruthy();
  });
});
