import { Component, Input, OnInit } from '@angular/core';
import { SectionComponent } from '../components/section/section.component';

const defaultContainer = {
  theme: 'darker',
  layout: 'column',
  align: 'left',
};

interface ContainerProps {
  layout?: string;
  theme?: string;
  align?: string;
  gap?: number;
}

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
  title?: string;

  @Input()
  align: string = 'left';

  @Input()
  layout: string = 'column';

  //container: ContainerProps = defaultContainer;

  //@Input()
  //containerProps: ContainerProps | null = null;

  constructor() {}

  ngOnInit(): void {
    /*if (this.containerProps) {
      console.log('containerProps ', this.containerProps)
      this.container = { ...this.container, ...this.containerProps };
    }*/
  }
}
