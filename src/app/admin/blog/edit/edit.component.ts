import { Component, OnInit } from "@angular/core";
import { BlogService } from "../blog.service";
import { Blog } from "../blog";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-blog-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class BlogEditComponent implements OnInit {
  id: string;
  blog: any;
  constructor(
    public blogService: BlogService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  editBlogForm = this.fb.group({
    title: ["", [Validators.required]],
    description: ["", Validators.required],
    content: ["", Validators.required],
    labels: [""],
  });
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.blogService.getSingleBlog(this.id).subscribe((blog) => {
        this.editBlogForm.setValue({
          title: blog.title,
          description: blog.description || "",
          content: blog.content || "",
          labels: blog.labels || "",
        });
      });
    });
  }

  async saveBlog() {
    if (this.editBlogForm.status === "VALID") {
      const docId = await this.blogService.saveBlogEntry(
        this.id,
        this.editBlogForm.value
      );
    }
  }

  get title() {
    return this.editBlogForm.get("title");
  }
  get description() {
    return this.editBlogForm.get("description");
  }

  get content() {
    return this.editBlogForm.get("content");
  }

  get labels() {
    return this.editBlogForm.get("labels");
  }
}
