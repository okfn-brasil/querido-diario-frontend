import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-analysis-form',
  templateUrl: './request-analysis-form.component.html',
  styleUrls: ['./request-analysis-form.component.sass']
})
export class RequestAnalysisFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      keywords: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

}
