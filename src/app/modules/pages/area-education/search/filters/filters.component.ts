import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';

@Component({
  selector: 'edu-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class EducationFiltersComponent implements OnInit {
  entities: string[] = [];
  themes: string[] = [];
  locations: string[] = [];
  dates = {
    since: '',
    until: '',
    period: 0,
  };
  formGroup: FormGroup = {} as FormGroup;
  @Input() filters: GazetteFilters = {} as GazetteFilters;
  @Output() changeFilters: EventEmitter<GazetteFilters> = new EventEmitter();

  constructor(
    private searchService: EducationGazettesService,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      entities: new FormControl(''),
    });

    this.searchService.getEntities().subscribe(results => {
      this.entities = results as string[];
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.onChangeFilters();
    });

    this.themes = this.filters.subthemes as string[];
    this.locations = this.filters.local as string[];
    this.formGroup.controls.entities.setValue(this.filters.entities || '');
    this.dates = {
      period: this.filters.period || 0,
      until: this.filters.until ? this.filters.until.toString() : '',
      since: this.filters.since ? this.filters.since.toString() : '',
    };
  }

  onChangeFilters() {
    this.changeFilters.emit({
      subthemes: this.themes,
      entities: this.formGroup.controls.entities.value ? [this.formGroup.controls.entities.value] : null,
      local: this.locations,
      until: this.filters.until,
      since: this.filters.since,
      period: this.filters.period,
    } as GazetteFilters);
  }

  onChangeDates(dates: GazetteFilters) {
    this.filters.until = dates.until? dates.until.toString() : '';
    this.filters.since = dates.since? dates.since.toString() : '';
    this.filters.period = dates.period || 0;
    this.onChangeFilters();
  }

  onChangeThemes(themes: string[]) {
    this.themes = themes;
    this.onChangeFilters();
  }

  onChangeLocations(locations: string[]) {
    this.locations = locations;
    this.onChangeFilters();
  }
}
