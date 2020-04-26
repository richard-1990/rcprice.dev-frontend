import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { BlogCreateComponent } from "./create/create.component";
import { BlogService } from "./blog.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  displayedColumns: string[] = ["select", "title", "author", "createdAt"];
  blogs = new MatTableDataSource([]);
  title = "";
  selection = new SelectionModel(true, []);

  constructor(public dialog: MatDialog, public blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogEntries().subscribe((blogs) => {
      this.blogs.data = blogs;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogCreateComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log("The dialog was closed");
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.blogs.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.blogs.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.blogs.data.forEach((row) => this.selection.select(row));
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
