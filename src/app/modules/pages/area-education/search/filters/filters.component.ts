import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';

interface DatesAlert {
  scraped_until: string;
  scraped_since: string;
}

@Component({
  selector: 'edu-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class EducationFiltersComponent implements OnInit {
  @Input() apiThemes: string[] = [];
  @Input() apiEntities: string[] = [];
  @Input() apiCities: City[] = [];
  @Input() isModal = false;
  entities: string[] = [];
  themes: string[] = [];
  locations: string[] = [];
  dates = {
    published_since: '',
    until: '',
    period: 0,
  };
  datesAlert: DatesAlert = {} as DatesAlert;
  @Input() filters: GazetteFilters = {} as GazetteFilters;
  @Output() changeFilters: EventEmitter<GazetteFilters> = new EventEmitter();

  constructor(
    private searchService: EducationGazettesService,
  ) { }

  ngOnInit(): void {
    this.searchService.getEntities().subscribe(results => {
      this.apiEntities = results as string[];
    });

    this.themes = this.filters.subthemes as string[];
    this.locations = this.filters.territory_id as string[];
    this.entities = this.filters.entities as string[];
    this.dates = {
      period: this.filters.period || 0,
      until: this.filters.until ? this.filters.until.toString() : '',
      published_since: this.filters.published_since ? this.filters.published_since.toString() : '',
    };

    this.datesAlert = {
      scraped_since: this.filters.scraped_since,
      scraped_until: this.filters.scraped_until,
    };
  }

  onChangeFilters() {
    let filters = {
      subthemes: this.themes,
      entities: this.entities,
      territory_id: this.locations,
      period: this.filters.period,
      until: this.filters.until,
      published_since: this.filters.published_since,
      scraped_until: this.datesAlert.scraped_until,
      scraped_since: this.datesAlert.scraped_since,
      pre_tags: "<b>",
      post_tags: "</b>",
    } as GazetteFilters;

    this.changeFilters.emit(filters);
  }

  onChangeDates(dates: GazetteFilters) {
    this.filters.until = dates.until? dates.until.toString() : '';
    this.filters.published_since = dates.published_since? dates.published_since.toString() : '';
    this.filters.period = dates.period || 0;
    this.onChangeFilters();
  }

  onChangeThemes(themes: string[]) {
    this.themes = themes;
    this.onChangeFilters();
  }

  onChangeEntities(entities: string[]) {
    this.entities = entities;
    this.onChangeFilters();
  }

  onChangeLocations(locations: string[]) {
    this.locations = locations;
    this.onChangeFilters();
  }
}
