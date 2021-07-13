import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeService } from '../pages/home/home.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.sass']
})
export class InfosComponent implements OnInit {
  infos$: Observable<any> = of(null)

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.infos$ = this.homeService.loadInfos();
  }

}
