import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass'],
})
export class ColumnComponent implements OnInit {
  @Input()
  gap: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }
}
