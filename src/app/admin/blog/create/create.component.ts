import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class BlogCreateComponent {
  @Input('data') data: any;
}
