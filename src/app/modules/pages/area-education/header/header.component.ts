import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderEducationComponent implements OnInit {
  mobileMenuOpen = false;
  showForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onCloseLoginModal(value: boolean) {
    this.showForm = value;
  }

  openForm() {
    this.showForm = true;
  }
}
