import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';
import { States } from 'src/app/interfaces/state';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass'],
})
export class AggregateFormComponent implements OnInit {
  @Input()
  form: any;

  @Output()
  searched = new EventEmitter<boolean>();

  timeout: ReturnType<typeof setTimeout> | undefined;

  territoriesAutocomplete: Territory[] = [];
  statesAutocomplete: States[] = []
  selectedCities: Territory[] = [];
  selectedStates: States[] = []; 

  cityListToInput: Territory[] = [];
  stateListToInput: States[] = []; 
  loadingCities = false;
  loadingStates = false;

  isCityDisabled: boolean = false;
  isStateDisabled: boolean = false;

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('stateField') stateField!: ElementRef;

  query: string = '';

  subscriptions: Subscription[] = [];

  cityQuery: City | null = null;
  stateQuery: string | null = null;

  constructor(
    private territoryService: TerritoryService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        const { state, city } = params;
        this.cityQuery = city;
        this.selectedCities = [];
        this.selectedStates = [];

        if (city) {
          if (Array.isArray(city)) {
            city.forEach((currCity) => {
              this.findCityById(currCity);
            });
          } else {
            this.findCityById(city);
          }
        }

        if (city !== undefined || state !== undefined) {
          let title_txt: string = `Querido Diário - Resultados para a busca agregada [${city || ''}${state ? `, ${state}` : ''}]:`;
          this.titleService.setTitle(title_txt);

          this.metaService.updateTag({ name: 'keywords', content: `${city || ''}${state ? `, ${state}` : ''}` });
          let description_txt: string = `Resultados para a busca no de Downloads para os municípios: [${city || ''}${state ? `, ${state}` : ''}]`;
          this.metaService.updateTag({ name: 'description', content: description_txt });

          const link: HTMLLinkElement = this.renderer.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.renderer.appendChild(this.document.head, link);
          link.setAttribute('href', this.document.URL);

          let robots_txt: string = 'index,follow';
          this.metaService.updateTag({ name: 'robots', content: robots_txt });
        } else {
          let title_txt: string = 'Querido Diário - Faça o download agregado de Diários Oficiais municipais do Brasil';
          this.titleService.setTitle(title_txt);

          this.metaService.updateTag({
            name: 'keywords',
            content:
              'busca, pesquisa, querido diário, diários oficiais municipais, Brasil, transparência, governança, download agregado, XML',
          });
          let description_txt: string = 'Página para busca de XML agregados pelo Querido Diário';
          this.metaService.updateTag({
            name: 'description',
            content: description_txt,
          });

          const link: HTMLLinkElement = this.renderer.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.renderer.appendChild(this.document.head, link);
          link.setAttribute('href', this.document.URL);

          let robots_txt: string = 'noindex,nofollow';
          this.metaService.updateTag({ name: 'robots', content: robots_txt });
        }
      })
    );
  }

  getCityList() {
    const selectedIds = this.selectedCities.map((city) => city.territory_id);
    return [
      ...this.territoriesAutocomplete.filter(
        (city) => !selectedIds.includes(city.territory_id)
      ),
      ...this.selectedCities,
    ];
  }

  getStateList() {
    const selectedCodes= this.selectedStates.map((state) => state.state_code);
    return [
      ...this.stateListToInput.filter(
        (state) => !selectedCodes.includes(state.state_code)
      ),
      ...this.selectedStates,
    ];
  }

  findCities() {
    this.loadingCities = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.territoryService
        .findByName(this.query.trim())
        .subscribe((response) => {
          response.forEach((city) => {
            this.territoriesAutocomplete.push(city);
          });
          this.loadingCities = false;
        });
    }, 500);
  }

  findCityById(id: string) {
    this.territoryService.findOne({ territoryId: id }).subscribe((response) => {
      this.selectedCities.push(response);
    });
  }

  search(): void {
    let queryParams = {};

    if (this.stateQuery) {
      queryParams = { ...queryParams, state_code: this.stateQuery };
    }else{
      queryParams = { ...queryParams, state_code:null}
    }

    if (this.cityQuery) {
      queryParams = { ...queryParams, state_code:this.cityQuery.state_code, territory_id:this.cityQuery.territory_id };
    }

    this.searched.emit(true);

    this.router.navigate(['/dados'], { queryParams });
  }

  onChangeCity(location: City) {
    this.cityQuery = location;
    this.isStateDisabled = !!location;
  }

  onChangeState(state: string) {
    this.stateQuery = state;
    this.isCityDisabled = !!state;
  }

  onChangeQuery(query: string) {
    this.query = query;
    if (this.query && this.query.length >= 3) {
      this.findCities();
    }
  }

  ngOnDestroy() {
    for (let subscriptions of this.subscriptions) {
      subscriptions.unsubscribe();
    }
  }
}
