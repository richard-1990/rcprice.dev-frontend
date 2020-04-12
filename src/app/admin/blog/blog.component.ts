import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { BlogCreateComponent } from "./create/create.component";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  constructor(public dialog: MatDialog) {}

  title = "";

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogCreateComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
