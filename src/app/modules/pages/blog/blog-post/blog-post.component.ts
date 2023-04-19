import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  content: SafeHtml = '';
  date: string = '';
  constructor(
    protected _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    const newDate = new Date(this.postData.date);
    this.date = `${newDate.getDate()}, ${getMonth(newDate.getMonth())}, ${newDate.getFullYear()}`;
    this.content = this._sanitizer.bypassSecurityTrustHtml(this.postData.content);
  }
}
