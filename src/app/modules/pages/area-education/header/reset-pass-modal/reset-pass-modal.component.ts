import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'edu-reset-pass-modal',
  templateUrl: './reset-pass-modal.component.html',
  styleUrls: ['./reset-pass-modal.component.sass']
})
export class ResetPassModalComponent implements OnInit, OnChanges {
  @Input() showForm = false;
  @Input() email = '';
  @Output() onHideForm: EventEmitter<boolean> = new EventEmitter();
  formGroup: UntypedFormGroup = {} as UntypedFormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
    });
  }

  ngOnChanges() {
    if(this.email) {
      this.formGroup.controls.email.setValue(this.email);
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.loading = true;
    this.loginService.startReset(this.formGroup.controls.email.value).subscribe(() => {
      this.loading = false;
      this.onClickClose();
    }, (err) => {
      if(err?.email && err.email[0] === 'We couldn\'t find an account associated with that email. Please try a different e-mail address.') {  
        this.errorMessage = 'Este e-mail pode não estar cadastrado em nossa base.';
      } else {
        this.errorMessage = 'Ocorreu um erro ao tentar realizar esta ação.';
      }
      this.loading = false;
    })
  }

  onClickClose() {
    this.onHideForm.emit(false);
  }
}
