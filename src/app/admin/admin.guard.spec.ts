import { TestBed } from "@angular/core/testing";

import { AdminGuard } from "./admin.guard";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireAuthMocks } from "../services/auth.service.spec";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterTestingModule } from "@angular/router/testing";

describe("AdminGuard", () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, RouterTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: AngularFireAuthMocks }],
    });
    guard = TestBed.inject(AdminGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
