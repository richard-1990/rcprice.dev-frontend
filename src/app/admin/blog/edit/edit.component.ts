import { Component, OnInit } from "@angular/core";
import { BlogService } from "../blog.service";
import { Blog } from "../blog";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blog-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class BlogEditComponent implements OnInit {
  id: string;
  private sub: any;
  blog: any;
  constructor(public blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.blogService
        .getSingleBlog(this.id)
        .subscribe((blog) => (this.blog = blog));
    });
  }
}
