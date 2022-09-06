import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isLoggedIn = false;
  userData: UserModel = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onClickLogout() {
    localStorage.removeItem(tokenKeys.token);
    localStorage.removeItem(tokenKeys.refresh);
    this.mobileMenuOpen = false;
    this.isLoggedIn = false;
    this.userService.resetUser();
    this.router.navigate(['/educacao'], {queryParams: {login: 'open'}});
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
    this.mobileMenuOpen = false;
    this.showForm = true;
  }
}
