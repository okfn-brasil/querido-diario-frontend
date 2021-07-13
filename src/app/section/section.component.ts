import { Component, Input, OnInit } from '@angular/core';

interface SectionConfig {
  theme: string;
  align: string;
  layout: string;
  gap?: number
}

const defaultConfig = {
  theme: 'light',
  align: 'center',
  layout: 'row'
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {

  @Input()
  config: SectionConfig = defaultConfig

  @Input()
  theme?: string = 'darker'

  constructor() { }

  ngOnInit(): void {
  }

}
