import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
interface CreateBlog {
  title: string;
}
@Component({
  selector: 'app-blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class BlogCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<BlogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateBlog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
