import { TestBed } from '@angular/core/testing';

import { ContactezMoiService } from './contactez-moi.service';

describe('ContactezMoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactezMoiService = TestBed.get(ContactezMoiService);
    expect(service).toBeTruthy();
  });
});
