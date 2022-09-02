import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tokenKeys } from '../utils';

@Component({
  selector: 'edu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderEducationComponent implements OnInit {
  mobileMenuOpen = false;
  showForm = false;
  isLoggedIn = !!localStorage.getItem(tokenKeys.token);

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if(params.login) {
          this.openForm();
        }
      }
    );

  }

  onLogged() {
    this.isLoggedIn = true;
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
