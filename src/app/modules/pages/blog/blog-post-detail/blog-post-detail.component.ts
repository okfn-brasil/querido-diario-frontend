import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import { getMonth } from '../utils';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.sass']
})
export class BlogPostDetailComponent implements OnInit {
  post = {} as BlogPost;
  postsRelated = [] as BlogPost[];
  showCategoriesModal = false;
  showRelatedModal = false;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService.getAll().subscribe(response => {
        const items = response.blog.filter((item: BlogPost) => item.id === parseInt(params.id));
        this.post = items[0];

        const related = response.blog.filter((item: BlogPost) => item.category === this.post.category && item.id !== this.post.id).splice(0, 4);
        this.postsRelated = related.map((post: BlogPost) => {
          const newDate = new Date(post.date);
          const parsedDate = `${newDate.getDate()}, ${getMonth(newDate.getMonth())}, ${newDate.getFullYear()}`;
          return {
            ...post,
            date: parsedDate,
          }
        });
      });
    })
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
