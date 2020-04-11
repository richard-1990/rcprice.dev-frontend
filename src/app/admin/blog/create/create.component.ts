import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class BlogCreateComponent {
  createBlogForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<BlogCreateComponent>) {}

  createNewBlog(): void {
    console.log(this.createBlogForm);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
