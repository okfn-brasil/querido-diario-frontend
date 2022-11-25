import { Component, OnInit } from '@angular/core';
import { IconType } from 'src/app/interfaces/icon';

@Component({
  selector: 'app-form-sent',
  templateUrl: './form-sent.component.html',
  styleUrls: ['./form-sent.component.sass']
})
export class FormSentComponent implements OnInit {

  icon: IconType = {
    file: 'gray-check',
    height: 66,
    width: 66,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
