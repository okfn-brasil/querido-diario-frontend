import { Component, Input, OnInit } from '@angular/core';
import { CNPJPartner } from 'src/app/interfaces/cnpj';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.sass']
})
export class PartnerComponent implements OnInit {
  @Input() data: CNPJPartner | undefined = {} as CNPJPartner;
  @Input() name: string | undefined = '';
  keys: string[] = []
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.data as CNPJPartner);
  }

  onClickName() {
    this.isOpen = !this.isOpen;
  }

}
