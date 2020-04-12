import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { BlogCreateComponent } from "./create/create.component";
import { BlogService } from "./blog.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  displayedColumns: string[] = ["title", "author"];
  blogs = [];

  constructor(public dialog: MatDialog, public blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogEntries().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  title = "";

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogCreateComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log("The dialog was closed");
    });
  }
}
