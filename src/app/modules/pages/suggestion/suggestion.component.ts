import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';
import { FormSentComponent } from '../../components/form-sent/form-sent.component';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.sass'],
})
export class SuggestionComponent implements OnInit {
  suggestionForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email_address: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    content: new FormControl(null, Validators.required),
  });

  error: string | null = null;

  constructor(
    private modal: MatDialog,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.suggestionForm.valid) {
      this.suggestionService.save(this.suggestionForm.value).subscribe(
        (_data) => {
          this.modal.open(FormSentComponent, {
            width: '382px',
            height: '360px',
            maxWidth: '382px',
          });
        },
        (_error) => {
          this.error = 'Erro ao enviar sugestão. Por favor, tente mais tarde.';
        }
      );
    }
  }
}
