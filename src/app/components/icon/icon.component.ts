import { Component, Input, OnInit } from '@angular/core';
interface Icon {
  file: string;
  height: number;
  width: number;
  to?: string;
  target?: string;
  xs?: {
    height: number;
    width: number;
  }
}
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
