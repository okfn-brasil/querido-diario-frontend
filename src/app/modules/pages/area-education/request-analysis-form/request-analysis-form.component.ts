import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { City } from 'src/app/interfaces/city';
import { FormSentComponent } from 'src/app/modules/components/form-sent/form-sent.component';
import { PeriodRange } from 'src/app/modules/components/period-picker/period-picker.component';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';
import { EducationQuotationService } from 'src/app/services/educationQuotation/educationQuotation.service';

@Component({
  selector: 'app-request-analysis-form',
  templateUrl: './request-analysis-form.component.html',
  styleUrls: ['./request-analysis-form.component.sass'],
})
export class RequestAnalysisFormComponent implements OnInit {
  form: UntypedFormGroup = this.formBuilder.group({});
  cities: City[] = [];
  themes: string[] = [];
  locations: string[] = [];
  entities: string[] = [];
  apiThemes: string[] = [];
  apiEntities: string[] = [];

  loading = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private citiesService: CitiesService,
    private searchService: EducationGazettesService,
    private educationQuotationService: EducationQuotationService,
    private modal: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
          ),
        ],
      ],
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
      this.apiThemes = results as string[];
    });

    this.searchService.getEntities().subscribe((results) => {
      this.apiEntities = results as string[];
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
    this.form.patchValue({ subthemes: themes });
  }

  onChangeEntities(entities: string[]) {
    this.entities = entities;
    this.form.patchValue({ entities });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const {
        email,
        name,
        phone,
        keywords,
        description,
        city,
        from,
        to,
        entities,
        subthemes,
      } = this.form.value;
      let city_complete = this.cities
        .filter(
          cityInfo => city.includes(cityInfo.territory_id))
        .map(
          cityInfo => `${cityInfo.territory_name} (${cityInfo.state_code})`);
      const content = [
        `Telefone: ${phone}`,
        `Descrição: ${description}`,
        `Palavras-chave: ${keywords.toString()}`,
        `Cidade: ${city_complete}`,
        `De: ${from}`,
        `Até: ${to}`,
        `Entidades: ${entities.toString()}`,
        `Subtemas: ${subthemes.toString()}`,
      ].join('\n');

      this.educationQuotationService
        .createQuotation({ email, name, message: content })
        .subscribe(
          (_data) => {
            this.loading = false;
            this.modal.open(FormSentComponent, {
              width: '382px',
              height: '360px',
              maxWidth: '382px',
            });
          },
          (_error) => {
            this.loading = false;
            this.snackbar.open(
              'Erro ao enviar pedido. Por favor, tente mais tarde.',
              'Fechar'
            );
          }
        );
    }
  }
}
