import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edu-info-cnpj',
  templateUrl: './info-cnpj.component.html',
  styleUrls: ['./info-cnpj.component.sass']
})
export class InfoCnpjComponent implements OnInit {
  @Input() infoText: string | undefined = '';
  @Input() infoName: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
