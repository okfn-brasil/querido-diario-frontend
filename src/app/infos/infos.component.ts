import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.sass'],
})
export class InfosComponent implements OnInit {
  infos$: Observable<any> = of(null);

  icon = {
    file: 'right-arrow-white',
    height: 12,
    width: 12,
  };

  @Input()
  bg: 'bg-gray-square' | 'bg-purple-square' = 'bg-gray-square';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.infos$ = this.contentService.find('home/infos');
  }
}
