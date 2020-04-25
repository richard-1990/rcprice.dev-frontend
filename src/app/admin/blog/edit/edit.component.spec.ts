import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogEditComponent } from "./edit.component";
import { BlogService } from "../blog.service";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { QuillModule, QuillEditorComponent } from "ngx-quill";

describe("BlogEditComponent", () => {
  let component: BlogEditComponent;
  let fixture: ComponentFixture<BlogEditComponent>;

  let MockBlogService;

  beforeEach(async(() => {
    MockBlogService = jasmine.createSpyObj(["getSingleBlog"]);
    MockBlogService.getSingleBlog.and.returnValue(
      of({
        title: "test",
      })
    );

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        QuillModule.forRoot(),
      ],
      declarations: [BlogEditComponent],
      providers: [
        {
          provide: BlogService,
          useValue: MockBlogService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
