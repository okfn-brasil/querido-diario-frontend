import { Component, Input, OnInit } from '@angular/core';
import { SectionConfig } from 'src/app/interfaces/section';

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
