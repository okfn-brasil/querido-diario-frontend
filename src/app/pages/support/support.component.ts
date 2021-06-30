import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOAL_LIST } from 'src/app/data/home';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass']
})
export class SupportComponent implements OnInit {

  goals: Observable<any[]> = of(GOAL_LIST);

  constructor() { }

  ngOnInit(): void {
  }

}
