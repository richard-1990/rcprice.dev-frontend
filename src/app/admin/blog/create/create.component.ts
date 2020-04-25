import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
} from "@angular/forms";
import { BlogService } from "../blog.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class BlogCreateComponent {
  createBlogForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  get title(): AbstractControl {
    return this.createBlogForm.get("title");
  }

  constructor(
    public dialogRef: MatDialogRef<BlogCreateComponent>,
    public blogService: BlogService,
    public router: Router
  ) {}

  async createNewBlog(): Promise<void> {
    if (this.createBlogForm.status === "VALID") {
      const docId = await this.blogService.createBlogEntry(this.title.value);
      this.dialogRef.close();
      this.router.navigate(["/admin", "blog", docId]);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
