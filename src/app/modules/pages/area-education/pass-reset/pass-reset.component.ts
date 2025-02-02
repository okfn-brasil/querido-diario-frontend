import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.sass']
})
export class PassResetComponent implements OnInit {
  formGroup: UntypedFormGroup = {} as UntypedFormGroup;
  errorMessage = '';
  loading = false;
  isSent = false;
  token = '';
  showPass = false;
  validations = {
    minLength: false,
    lettersAndNumbers: false,
    specials: false,
    uppercase: false
  }
  validPass = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      password: new UntypedFormControl(null, [Validators.required, Validators.minLength(8)]),
    });

    this.route.queryParams
      .subscribe(params => {
        this.token = params.token;
      }
    );

    this.formGroup.controls.password.valueChanges.subscribe(value => {
      if(value){ 
        const validate = {
          minLength: value.length >= 8,
          lettersAndNumbers: /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(value),
          specials: !!value.match(/[*,!.&%$#@]/),
          uppercase: !!value.match(/[A-Z]/g),
        };
        this.validations = validate;
        this.validPass = validate.minLength && validate.lettersAndNumbers && validate.specials && validate.uppercase;
      } else {
        this.validations = {
          minLength: false,
          lettersAndNumbers: false,
          specials: false,
          uppercase: false
        };
      }
    })
  }

  onSubmit() {
    this.errorMessage = '';
    this.loading = true;
    this.loginService.validateToken(this.token).subscribe(() => {
      this.submit();
    }, () => {
      this.errorMessage = 'O token para redefinição de senha está expirado.';
      this.loading = false;
    });
  };

  submit() {
    this.loginService.resetPassword(this.token, this.formGroup.controls.password.value).subscribe(() => {
      this.isSent = true;
      this.loading = false;
    }, () => {
      this.errorMessage = 'Ocorreu um erro ao tentar realizar esta ação.';
      this.loading = false;
    });
  };

  onClickShowPass() {
    this.showPass = !this.showPass;
  }

  onFinish() {
    this.router.navigate(['/educacao'], {queryParams: {login: 'open'}});
  }
}
