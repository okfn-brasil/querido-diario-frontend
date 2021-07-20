import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() item: any

  @Input() first: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
