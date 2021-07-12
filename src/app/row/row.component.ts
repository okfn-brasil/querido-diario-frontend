import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent implements OnInit {

  @Input()
  gap: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
