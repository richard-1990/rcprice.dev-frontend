import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { BlogCreateComponent } from "./create/create.component";
import { BlogService } from "./blog.service";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  displayedColumns: string[] = ["select", "title", "author", "createdAt"];
  blogs = [];
  title = "";
  selection = new SelectionModel(true, []);

  constructor(public dialog: MatDialog, public blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogCreateComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log("The dialog was closed");
    });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.blogs.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.blogs.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }
}
