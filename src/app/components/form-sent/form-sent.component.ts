import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/types/icon';

@Component({
  selector: 'app-form-sent',
  templateUrl: './form-sent.component.html',
  styleUrls: ['./form-sent.component.sass']
})
export class FormSentComponent implements OnInit {

  icon: Icon = {
    file: 'gray-check',
    height: 66,
    width: 66,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
