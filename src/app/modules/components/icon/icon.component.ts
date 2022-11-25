import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/interfaces/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class IconComponent implements OnInit {

  @Input()
  icon: Icon | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
