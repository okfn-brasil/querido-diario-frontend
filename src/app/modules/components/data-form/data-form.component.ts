import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass'],
})
export class DataFormComponent implements OnInit {
  @Input()
  form: any;

  timeout: ReturnType<typeof setTimeout> | undefined;

  territoriesAutocomplete: Territory[] = []; // Lista de municipios que aparecem ao digitar no campo de busca
  selectedCities: Territory[] = [];
  selectedStates: Territory[] = [];

  cityListToInput: Territory[] = [];
  loadingCities = false;
  loadingStates = false;

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('stateField') stateField!: ElementRef;

  query: string = '';

  subscriptions: Subscription[] = [];

  /* stateQuery: string[] = []; */
  cityQuery: string[] = [];

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
        const { city } = params;
        this.cityQuery = city;
        this.selectedCities = [];

        if (city) {
          if (Array.isArray(city)) {
            city.forEach((currCity) => {
              this.findCityById(currCity);
            });
          } else {
            this.findCityById(city);
          }
        }

        // Se a cidade foi fornecida, atualiza as meta tags da página para SEO
        if (city !== undefined) {
          // TITLE - Deve ser relevante para o conteúdo, ter menos de 70 caracteres e incluir as palavras-chave.
          let title_txt: string =
            'Querido Diário - Resultados para a busca agregada [' + city + ']:';
          this.titleService.setTitle(title_txt);
          // KEYWORDS - Inclua aqui as palavras-chave relevantes para o conteúdo da página.

          this.metaService.updateTag({ name: 'keywords', content: city });
          // DESCRIPTION - Deve ser relevante para o conteúdo, menos de 160 caracteres e incluir as palavras-chave.
          let description_txt: string =
            'Resultados para a busca no de Downloads para os municípios: [' +
            city +
            ']';
          this.metaService.updateTag({
            name: 'description',
            content: description_txt,
          });

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
          let title_txt: string =
            'Querido Diário - Faça o download agregado de Diários Oficiais municipais do Brasil';
          this.titleService.setTitle(title_txt);
          // KEYWORDS - Inclua aqui as palavras-chave relevantes para o conteúdo da página, separadas por vírgula.
          this.metaService.updateTag({
            name: 'keywords',
            content:
              'busca, pesquisa, querido diário, diários oficiais municipais, Brasil, transparência, governança, download agregado, XML',
          });
          // DESCRIPTION - Deve ser relevante para o conteúdo, menos de 160 caracteres e incluir as palavras-chave.
          let description_txt: string =
            'Página para busca de XML agregados pelo Querido Diário';
          this.metaService.updateTag({
            name: 'description',
            content: description_txt,
          });
          // Adiciona TAG <link> à página de maneira dinâmica, incluindo o link completo para a página com os termos fornecidos para a busca
          const link: HTMLLinkElement = this.renderer.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.renderer.appendChild(this.document.head, link);
          link.setAttribute('href', this.document.URL);
          // Configura os robôs para não indexarem esta página inicial de busca que não contém resultados
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
    const selectedIds = this.selectedCities.map((city) => city.state_code);
    return [
      ...this.territoriesAutocomplete.filter(
        (city) => !selectedIds.includes(city.state_code)
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

    /* if (this.stateQuery && this.stateQuery.length) {
      queryParams = { ...queryParams, state: this.stateQuery };
    } else {
      queryParams = { ...queryParams, state: null };
    } */

    if (this.cityQuery && this.cityQuery.length) {
      queryParams = { ...queryParams, city: this.cityQuery };
    } else {
      queryParams = { ...queryParams, city: null };
    }

    this.router.navigate(['/dados'], { queryParams });
  }

  onChangeCity(locations: string[]) {
    this.cityQuery = locations;
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
