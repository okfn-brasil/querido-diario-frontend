import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.sass']
})
export class BlogCategoriesComponent implements OnInit {
  categories = [];
  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(response => {
      this.categories = response.blog.map((item: BlogPost) => item.category).filter((item: string, pos: number, self: string) => {
        return self.indexOf(item) == pos;
      })
    });
  }

}
