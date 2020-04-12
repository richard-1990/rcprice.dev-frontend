import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { BlogService } from "../blog.service";

@Component({
  selector: "app-blog-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class BlogCreateComponent {
  createBlogForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  get title() {
    return this.createBlogForm.get("title");
  }

  constructor(
    public dialogRef: MatDialogRef<BlogCreateComponent>,
    public blogService: BlogService
  ) {}

  async createNewBlog() {
    if (this.createBlogForm.status === "VALID") {
      const docId = await this.blogService.createBlogEntry(this.title.value);
      console.log(docId);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
