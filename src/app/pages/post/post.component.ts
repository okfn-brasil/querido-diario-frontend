import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content$ = this.contentService.find('post');
  }

}
