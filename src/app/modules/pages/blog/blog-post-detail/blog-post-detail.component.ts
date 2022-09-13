import { Component, OnInit } from '@angular/core';
import { mockPosts } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.sass']
})
export class BlogPostDetailComponent implements OnInit {
  post = mockPosts[0];
  showCategoriesModal = false;
  showRelatedModal = false;
  constructor() { }

  ngOnInit(): void {
  }

  openRelatedModal() {
    this.showRelatedModal = true;
  }

  closeModal() {
    setTimeout(() => {
      this.showCategoriesModal = false;
      this.showRelatedModal = false;
    }, 100);
  }

  openCategoriesModal() {
    this.showCategoriesModal = true;
  }
}
