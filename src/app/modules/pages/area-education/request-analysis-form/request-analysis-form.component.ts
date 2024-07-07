import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { City } from 'src/app/interfaces/city';
import { PeriodRange } from 'src/app/modules/components/period-picker/period-picker.component';
import { FormSentComponent } from 'src/app/modules/components/form-sent/form-sent.component';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';
import { EducationAnalysisQuotationService } from 'src/app/services/education-quotation/education-quotation.service';

@Component({
  selector: 'app-request-analysis-form',
  templateUrl: './request-analysis-form.component.html',
  styleUrls: ['./request-analysis-form.component.sass'],
})
export class RequestAnalysisFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  cities: City[] = [];
  themes: string[] = [];
  locations: string[] = [];
  entities: string[] = [];

  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private citiesService: CitiesService,
    private searchService: EducationGazettesService,
    private educationAnalysisQuotationService: EducationAnalysisQuotationService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      keywords: ['', Validators.required],
      description: ['', Validators.required],
      city: [[], Validators.required],
      from: [''],
      to: [''],
      entities: [''],
      subthemes: [''],
    });

    this.citiesService.getAll().subscribe((cities) => {
      this.cities = cities.cities as City[];
    });

    this.searchService.getThemes().subscribe((results) => {
      this.themes = results as string[];
    });
  }

  onChangeLocations(locations: string[]) {
    this.locations = locations;
    this.form.patchValue({ city: locations });
  }

  changePeriod(period: PeriodRange) {
    this.form.patchValue({ from: period.from, to: period.to });
  }

  onChangeThemes(themes: string[]) {
    this.themes = themes;
    this.form.patchValue({ themes });
  }

  onChangeEntities(entities: string[]) {
    this.entities = entities;
    this.form.patchValue({ entities });
  }

  onSubmit() {
    if (this.form.valid) {
      this.educationAnalysisQuotationService.save(this.form.value).subscribe(
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
