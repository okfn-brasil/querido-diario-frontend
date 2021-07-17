import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})

export class ContainerComponent implements OnInit {
  @Input()
  theme: 'darker' | 'dark-secondary' | 'dark' | 'light' = 'darker';

  @Input()
  containerClass: string = 'container';

  @Input()
  bg?: string;

  @Input()
  gap: number = 0;

  @Input()
  align: string = 'left';

  @Input()
  layout: string = 'column';

  constructor() {}

  ngOnInit(): void {
  }
}
