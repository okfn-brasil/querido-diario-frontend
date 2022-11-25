import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog';
import { getMonth } from '../utils';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  @Input() postData: BlogPost = {} as BlogPost;
  @Input() isFullPage = false;
  date: string = '';
  constructor() { }

  ngOnInit(): void {
    const newDate = new Date(this.postData.date);
    this.date = `${newDate.getDate()}, ${getMonth(newDate.getMonth())}, ${newDate.getFullYear()}`;
  }
}
