import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  showCategoriesModal = false;
  totalItems = 0;
  currPage = 1;
  
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService.getAll().subscribe(response => {
        const items = response.blog.filter((item: BlogPost) => (item.category === params.id) || !params.id);
        this.posts = items;
        this.totalItems = this.posts.length
      });
    })
  }

  closeModal() {
    setTimeout(() => {
      this.showCategoriesModal = false;
    }, 100);
  }

  onChangePage(page: number) {
    this.currPage = page + 1;
    window.scrollTo(0,0);
  }

  openCategoriesModal() {
    this.showCategoriesModal = true;
  }
}
