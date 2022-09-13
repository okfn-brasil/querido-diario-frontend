import { Component, OnInit } from '@angular/core';
import { BlogPost, mockPosts } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = mockPosts;
  showCategoriesModal = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    setTimeout(() => {
      this.showCategoriesModal = false;
    }, 100);
  }

  openCategoriesModal() {
    this.showCategoriesModal = true;
  }
}
