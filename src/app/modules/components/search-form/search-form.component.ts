import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DownloadCSVService } from './../../../services/download-csv/download-csv.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent implements OnInit {
  termControl = new UntypedFormControl();

  @Input()
  form: any;

  timeout: ReturnType<typeof setTimeout> | undefined;

  options: string[] = [
    'Contratação',
    '"Dispensa de licitação"',
    '"Compra emergencial COVID-19"~50',
    'Nomeação~3',
    'Saneamento + básico',
  ];

  filteredOptions: Observable<string[]> = new Observable();

  cityControl = new UntypedFormControl();
  territories: Territory[] = [];
  selectedCities: Territory[] = [];
  territory: string[] = [];
  cityListToInput: Territory[] = [];
  loadingCities = false;

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('termField') termField!: ElementRef;
  @ViewChild('periodField') periodField!: ElementRef;

  since: string = '';
  until: string = '';
  query: string = '';
  sort_by: string = '';

  subscriptions: Subscription[] = [];

  constructor(
    private territoryService: TerritoryService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private downloadCSVService: DownloadCSVService
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.termControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterTerms(value))
    );

    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        const { term, city, since, until, sort_by } = params;
        this.territory = city;
        this.selectedCities = [];
        this.since = since;
        this.until = until;
        this.sort_by = sort_by;
        // TODO: adicionar cidade e se possível período de tempo selecionado para a busca na descrição e ao título
        // Página de resultados da busca:
        if (term !== undefined) {
          // TITLE - Deve ser relevante para o conteúdo, ter menos de 70 caracteres e incluir as palavras-chave.
          let title_txt: string = 'Querido Diário - Resultados para a busca [' +  term + ']:';
          this.titleService.setTitle(title_txt);
          // KEYWORDS - Inclua aqui as palavras-chave relevantes para o conteúdo da página.
          let terms = 'busca, pesquisa, querido diário, diários oficiais municipais, Brasil, transparência, governança, ' + term;
          this.metaService.updateTag({ name: 'keywords', content: term });
          // DESCRIPTION - Deve ser relevante para o conteúdo, menos de 160 caracteres e incluir as palavras-chave.
          let description_txt: string = 'Resultados para a busca no Querido Diário para os termos: [' + term + ']';
          this.metaService.updateTag({ name: 'description', content: description_txt });

          // Adiciona TAG <link> à página de maneira dinâmica, incluindo o link completo para a página com os termos fornecidos para a busca
          const link: HTMLLinkElement = this.renderer.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.renderer.appendChild(this.document.head, link);
          link.setAttribute('href', this.document.URL);
          // Configura os robôs para indexarem esta página, que contém os resultados
          let robots_txt: string = 'index,follow';
          this.metaService.updateTag({ name: 'robots', content: robots_txt });
        }
        // Página inicial da pesquisa:
        else {
          // TITLE - Deve ser relevante para o conteúdo, ter menos de 70 caracteres e incluir as palavras-chave.
          let title_txt: string = 'Querido Diário - Pesquise nos Diários Oficiais municipais do Brasil';
          this.titleService.setTitle(title_txt);
          // KEYWORDS - Inclua aqui as palavras-chave relevantes para o conteúdo da página, separadas por vírgula.
          this.metaService.updateTag({ name: 'keywords', content: 'busca, pesquisa, querido diário, diários oficiais municipais, Brasil, transparência, governança' });
          // DESCRIPTION - Deve ser relevante para o conteúdo, menos de 160 caracteres e incluir as palavras-chave.
          let description_txt: string = 'Página para realização de busca no Querido Diário';
          this.metaService.updateTag({ name: 'description', content: description_txt });
          // Adiciona TAG <link> à página de maneira dinâmica, incluindo o link completo para a página com os termos fornecidos para a busca
          const link: HTMLLinkElement = this.renderer.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.renderer.appendChild(this.document.head, link);
          link.setAttribute('href', this.document.URL);
          // Configura os robôs para não indexarem esta página inicial de busca que não contém resultados
          let robots_txt: string = 'noindex,nofollow';
          this.metaService.updateTag({ name: 'robots', content: robots_txt });
        }

        // TODO: incluir a(s) cidade(s) selecionadas nas meta tags para SEO
        if (city) {
          if (Array.isArray(city)) {
            city.forEach((currCity) => {
              this.findCityById(currCity);
            });
          } else {
            this.findCityById(city);
          }
        }

        this.termControl.setValue(term);
      })
    );
  }

  getCityList() {
    const selectedIds = this.selectedCities.map((city) => city.territory_id);
    return [
      ...this.territories.filter(
        (city) => !selectedIds.includes(city.territory_id)
      ),
      ...this.selectedCities,
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
            this.territories.push(city);
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
    const term = this.termField.nativeElement.value;

    if (this.territory && this.territory.length) {
      queryParams = { ...queryParams, city: this.territory };
    } else {
      queryParams = { ...queryParams, city: null };
    }

    if (term) {
      queryParams = { ...queryParams, term };
    } else {
      queryParams = { ...queryParams, term: null };
    }

    if (this.since && this.until) {
      queryParams = { ...queryParams, since: this.since, until: this.until };
    } else {
      queryParams = { ...queryParams, since: null, until: null };
    }

    if (this.sort_by && this.sort_by.length) {
      queryParams = { ...queryParams, sort_by: this.sort_by };
    } else {
      queryParams = { ...queryParams, sort_by: null };
    }

    this.downloadCSVService.clear();

    this.router.navigate(['/pesquisa'], { queryParams });
  }

  onRangeSelected(range: { start: Moment; end: Moment }) {
    if (range.start) {
      this.since = range.start.format('YYYY-MM-DD');
    }
    if (range.end) {
      this.until = range.end.format('YYYY-MM-DD');
    }
  }

  private _filterTerms(value: string): string[] {
    if (!value) {
      return [];
    }
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(territory: Territory): string {
    return territory && territory.territory_label
      ? territory.territory_label
      : '';
  }

  onChangeLocation(locations: string[]) {
    this.territory = locations;
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
