import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/interfaces/city';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';
import { UserQuery } from 'src/app/stores/user/user.query';

@Component({
  selector: 'edu-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent implements OnInit {
  page = 0;
  query = '';
  filters: GazetteFilters = {} as GazetteFilters;
  cities: City[] = [];
  themes: string[] = [];
  selectedCities: string[] = [];
  isLoading = false;
  currentEmail = '';
  @Input() hasEditEmail = false;
  @Output() created: EventEmitter<boolean> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private searchService: EducationGazettesService,
    private citiesService: CitiesService,
    private alertsService: AlertsService,
    private userQuery: UserQuery,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.query = params.querystring;
      this.filters = {
        entities: Array.isArray(params.entities) ? params.entities : [params.entities],
        subthemes: params.subthemes,
        local: params.local,
      } as GazetteFilters;
    }).unsubscribe();
    this.getFiltersInfo();

    this.userQuery.userData$.subscribe(userData => {
      this.currentEmail = userData.alert_email || userData.email as string;
    });
  }

  setPage(page: number) {
    this.page = page;
  }

  onChangeFilters(filters: GazetteFilters) {
    this.filters = {
      entities: filters.entities && filters.entities[0] ? filters.entities : [],
      local: filters.local,
      subthemes: filters.subthemes
    } as GazetteFilters;
    if(filters.local && filters.local.length) {
      this.selectedCities = this.cities
        .filter(city => filters.local?.includes(city.territory_id))
        .map(city => city.territory_name);
    } else {
      this.selectedCities = [];
    }
  }

  getFiltersInfo() {
    this.searchService.getThemes().subscribe(results => {
      this.themes = results as string[];
    });

    this.citiesService.getAll().subscribe(cities => {
      this.cities = cities.cities as City[];
      this.onChangeFilters(this.filters);
    });
  }

  create() {
    this.isLoading = true;
    this.alertsService.postAlert(this.filters, this.query).subscribe(() => {
      this.created.emit(true);
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
      this.page = 4;
    })
  }

  onClickClose() {
    this.close.emit(true);
  }
}
