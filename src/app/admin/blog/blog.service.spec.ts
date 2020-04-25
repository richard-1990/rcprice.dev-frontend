import { TestBed } from "@angular/core/testing";

import { BlogService } from "./blog.service";
import {
  AngularFireAuthMocks,
  AngularFirestoreMocks,
} from "../../services/auth.service.spec";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterTestingModule } from "@angular/router/testing";

describe("BlogService", () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireAuthMocks },
        { provide: AngularFirestore, useValue: AngularFirestoreMocks },
      ],
    });
    service = TestBed.inject(BlogService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
