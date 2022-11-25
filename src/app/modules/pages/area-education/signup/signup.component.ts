import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/signup/signup.service';
import { UserService } from 'src/app/stores/user/user.service';
import { tokenKeys } from '../utils';

interface ErrorsModel {
  email: boolean;
  name: boolean;
  password: boolean;
  city: boolean;
  area: boolean;
  state: boolean;
}

@Component({
  selector: 'edu-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  stateList = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'
  ];
  showPass = false;
  formGroup: FormGroup = {} as FormGroup;
  loading = false;
  emailLoading = false;
  emailExists = false;
  errorMessage = '';
  errors: ErrorsModel = {} as ErrorsModel;
  step = 0;
  cacheEmail = '';
  validations = {
    minLength: false,
    lettersAndNumbers: false,
    specials: false,
    uppercase: false
  }
  validPass = false;
  timeout: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
      city: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      area: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
    });

    this.formGroup.controls.email.valueChanges.subscribe(value => {
      if(this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        if(this.formGroup.controls.email.valid && value !== this.cacheEmail) {
          this.cacheEmail = value;
          this.checkEmail();
        }
      }, 1200);
    });

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
    });
  }

  onClickForm() {
    this.errorMessage = '';
  }

  onClickShowPass() {
    this.showPass = !this.showPass;
  }

  disableFirstStep() {
    this.formGroup.controls.email.disable();
  }

  enableFirstStep() {
    this.formGroup.controls.email.enable();
  }

  checkEmail(nextStep = false) {
    this.disableFirstStep();
    this.emailLoading = true;
    this.errors.email = false;
    this.signUpService.checkEmail(this.formGroup.controls.email.value).subscribe(() => {
      this.enableFirstStep();
      this.emailExists = true;
      this.emailLoading = false;
    }, () => {
      this.enableFirstStep();
      this.emailExists = false;
      this.emailLoading = false;
      if(nextStep) {
        this.step = 1;
      }
    })
  }

  onSubmit() {
    if(!this.step) {
      this.checkFirstStep();
      if(!this.errors.email && !this.errors.password && !this.errors.name) {
        this.checkEmail(true);
      }
    } else {
      this.checkSecondStep();
      if(!this.errors.state && !this.errors.city && !this.errors.area) {
        this.submit();
      }
    }
  }

  checkFirstStep() {
    this.errors.email = !(this.formGroup.controls.email.valid && /\S+@\S+\.\S+/.test(this.formGroup.controls.email.value));
    this.errors.password = !(this.formGroup.controls.password.valid && this.validPass);
    this.errors.name = !this.formGroup.controls.name.valid;
  }

  checkSecondStep() {
    this.errors.city = !this.formGroup.controls.city.valid;
    this.errors.area = !this.formGroup.controls.area.valid;
    this.errors.state = !this.formGroup.controls.state.valid;
  }

  submit() {
    this.loading = true;
    this.formGroup.disable();
    this.signUpService.post(this.formGroup.value).subscribe(response => {
      this.loading = false;
      this.userService.setUserInfo(response);
      localStorage.setItem(tokenKeys.token, response.jwt.access);
      localStorage.setItem(tokenKeys.refresh, response.jwt.refresh);
      this.router.navigate(['/educacao/comece']);
    }, () => {
      this.loading = false;
      this.step = 0;
      this.formGroup.reset();
      this.formGroup.enable();
      this.enableFirstStep();
      this.errorMessage = 'Ocorreu um erro ao criar sua conta, por favor, tente novamente.';
    })
  }
}
