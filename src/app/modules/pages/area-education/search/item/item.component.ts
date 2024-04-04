import { Component, Input, OnInit } from '@angular/core';
import { GazetteModel } from 'src/app/interfaces/education-gazettes';

@Component({
  selector: 'edu-search-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemEducationComponent implements OnInit {
  @Input() gazette: GazetteModel = {} as GazetteModel;
  isShowingTooltip = false;
  constructor() { }


  ngOnInit(): void {
  }

  hideTooltip() {
    this.isShowingTooltip = false;
  }

  showTooltip() {
    this.isShowingTooltip = true;
  }

  



}
