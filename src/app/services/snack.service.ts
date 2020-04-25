import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError(): Subscription {
    this.snackBar.open("You must be logged in!", "OK", {
      duration: 5000,
    });

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap(() => this.router.navigate(["/login"])))
      .subscribe();
  }

  firebaseError(message?: string): void {
    this.snackBar.open(message, "OK", {
      duration: 5000,
    });
  }
  firebaseSuccess(message?: string): void {
    this.snackBar.open(message, "OK", {
      duration: 5000,
    });
  }
}
