import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { BlogCreateComponent } from './create/create.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(public dialog: MatDialog) {}

  title = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(BlogCreateComponent, {
      data: { title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.title = result;
      console.log(this.title);
    });
  }
}
