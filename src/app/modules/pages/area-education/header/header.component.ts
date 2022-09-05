import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/interfaces/account';
import { LoginService } from 'src/app/services/login/login.service';
import { UserQuery } from 'src/app/stores/user/user.query';
import { UserService } from 'src/app/stores/user/user.service';
import { tokenKeys } from '../utils';

@Component({
  selector: 'edu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderEducationComponent implements OnInit {
  mobileMenuOpen = false;
  showForm = false;
  isLoggedIn = true;
  userData: UserModel = {};

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private userService: UserService,
    private userQuery: UserQuery,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if(params.login) {
          this.openForm();
        }
      }
    );

    this.userQuery.userData$.subscribe(userData => {
      this.userData = userData;
      if(!userData.full_name) {
        this.getUserInfo();
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  getUserInfo() {
    if(localStorage.getItem(tokenKeys.token)) {
      this.loginService.getUserData().subscribe(response => {
        this.userService.setUserInfo(response);
      });
    }
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
