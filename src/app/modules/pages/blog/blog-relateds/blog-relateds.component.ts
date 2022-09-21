import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-relateds',
  templateUrl: './blog-relateds.component.html',
  styleUrls: ['./blog-relateds.component.sass']
})
export class BlogRelatedsComponent implements OnInit {
  @Input() posts: BlogPost[] = [];
  @Input() category: string = '';
  constructor() { }

  ngOnInit(): void {
  }
}
