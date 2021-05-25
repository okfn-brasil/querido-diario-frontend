import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p',
  template: '<ng-content></ng-content>',
  styleUrls: ['./p.component.sass']
})
export class PComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
