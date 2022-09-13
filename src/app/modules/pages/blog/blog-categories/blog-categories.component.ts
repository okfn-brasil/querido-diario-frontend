import { Component, OnInit } from '@angular/core';
import { mockCategories } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.sass']
})
export class BlogCategoriesComponent implements OnInit {
  categories = mockCategories;
  constructor() { }

  ngOnInit(): void {
  }

}
