import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UserQuery } from 'src/app/stores/user/user.query';
import { UserService } from 'src/app/stores/user/user.service';

@Component({
  selector: 'edu-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.sass']
})
export class EditEmailComponent implements OnInit {
  email = '';
  currentEmail = '';
  isLoading = false;
  error = false;
  invalid = false;
  @Output() onSent: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private userQuery: UserQuery,
    private userService: UserService,
    private accountService: LoginService,
  ) { }

  ngOnInit(): void {
    this.userQuery.userData$.subscribe(userData => {
      this.currentEmail = userData.alert_email || userData.email as string;
    });
  }

  submit() {
    this.error = false;
    this.invalid = false;
    if(/\S+@\S+\.\S+/.test(this.email)) {
      this.isLoading = true;
      this.accountService.updateUserData({alert_email: this.email}).subscribe(response => {
        this.userService.setUserInfo(response);
        this.onSent.emit();
        this.isLoading = false;
      }, () => {
        this.error = true;
        this.isLoading = false;
      })
    } else {
      this.invalid = true;
    }
  }
}
