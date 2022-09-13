import { Component, OnInit } from '@angular/core';
import { BlogPost, mockPosts } from 'src/app/interfaces/blog';
import { getMonth } from '../utils';

@Component({
  selector: 'app-blog-relateds',
  templateUrl: './blog-relateds.component.html',
  styleUrls: ['./blog-relateds.component.sass']
})
export class BlogRelatedsComponent implements OnInit {
  posts: BlogPost[] = mockPosts.slice(0, 4);
  constructor() { }

  ngOnInit(): void {
    this.posts = this.posts.map(post => {
      const newDate = new Date(post.date);
      const parsedDate = `${newDate.getDate()}, ${getMonth(newDate.getMonth())}, ${newDate.getFullYear()}`;
      return {
        ...post,
        date: parsedDate,
      };
    });
  }
}
