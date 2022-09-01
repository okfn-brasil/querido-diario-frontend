import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'edu-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  @Input() showForm = false;
  @Output() onHideForm: EventEmitter<boolean> = new EventEmitter();;
  formGroup: FormGroup = {} as FormGroup;
  loading = false;
  showPass = false;
  errorMessage = '';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
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
      this.onClickClose();
      // TO DO LOGAR COM STORE E TOKEN

    }, () => {
      this.loading = false;
      this.errorMessage = 'Ocorreu um erro ao tentar logar, verifique suas credenciais e tente novamente.'
    })
  }

}
