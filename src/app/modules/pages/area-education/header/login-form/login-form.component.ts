import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/stores/user/user.service';
import { tokenKeys } from '../../utils';

@Component({
  selector: 'edu-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  @Input() showForm = false;
  @Output() onHideForm: EventEmitter<boolean> = new EventEmitter();
  @Output() onShowResetForm: EventEmitter<boolean> = new EventEmitter();
  @Output() onLoggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() onSetEmail: EventEmitter<string> = new EventEmitter();
  formGroup: UntypedFormGroup = {} as UntypedFormGroup;
  loading = false;
  showPass = false;
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      password: new UntypedFormControl(null, [Validators.required]),
      email: new UntypedFormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
    });
  }

  onClickClose() {
    this.onHideForm.emit(false);
  }

  onClickShowPass() {
    this.showPass = !this.showPass;
  }

  onSubmit() {
    this.errorMessage = '';
    this.loading = true;
    this.loginService.login(this.formGroup.value).subscribe(response => {
      this.loading = false;
      localStorage.setItem(tokenKeys.token, response.access);
      localStorage.setItem(tokenKeys.refresh, response.refresh);
      this.setUserInfo();
      this.onLoggedIn.emit();
      this.formGroup.reset();
      this.onClickClose();
      this.router.navigate([], {queryParams: {}});
    }, () => {
      this.loading = false;
      this.errorMessage = 'Ocorreu um erro ao tentar logar, verifique suas credenciais e tente novamente.';
    })
  }

  setUserInfo() {
    this.loginService.getUserData().subscribe(response => {
      this.userService.setUserInfo(response);
    });
  }

  onClickResetPass() {
    this.onClickClose();
    this.onShowResetForm.emit(true);
    this.onSetEmail.emit(this.formGroup.controls.email.value);
  }

}
