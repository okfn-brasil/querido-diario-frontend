import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOAL_LIST } from 'src/app/data/home';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.sass']
})
export class GoalsComponent implements OnInit {
  goals$: Observable<any> = of(GOAL_LIST)

  constructor() { }

  ngOnInit(): void {
  }

}
