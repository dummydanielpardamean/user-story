import { inject, TestBed } from "@angular/core/testing";

import { AuthenticationGuardService } from "./authentication-guard.service";

describe('AuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuardService]
    });
  });

  it('should be created', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
