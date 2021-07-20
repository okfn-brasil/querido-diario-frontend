import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent  implements OnInit {
  copyright$: Observable<any> = of(null)
  navigation$: Observable<any> = of(null)
  social$: Observable<any> = of(null)

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.navigation$ = this.contentService.find('footer/navigation');
    this.copyright$ = this.contentService.find('footer/copyright');
    this.social$ = this.contentService.find('footer/social');
  }
}
