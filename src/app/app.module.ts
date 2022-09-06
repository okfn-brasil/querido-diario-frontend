import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './modules/components/modal/modal.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { Event, Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

import { ContainerComponent } from './modules/layout/container/container.component';
import { ListItemComponent } from './modules/components/list-item/list-item.component';
import { ColumnComponent } from './modules/layout/column/column.component';
import { RowComponent } from './modules/layout/row/row.component';

import { InfosComponent } from './modules/components/infos/infos.component';

/* custom directives */
import { ThemeDirective } from './directives/theme/theme.directive';
import { FlexWidthDirective } from './directives/flex-width/flex-width.directive';
import { MatButtonModule } from '@angular/material/button';
import { FlexHeightDirective } from './directives/flex-height/flex-height.directive';
import { HeightDirective } from './directives/height/height.directive';
import { WidthDirective } from './directives/width/width.directive';
import { ListComponent } from './modules/components/list/list.component';
import { AccessLevelsComponent } from './modules/pages/access-levels/access-levels.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { PrivacyPolicyComponent } from './modules/pages/privacy-policy/privacy-policy.component';
import { ComplaintComponent } from './modules/pages/complaint/complaint.component';
import { SupportComponent } from './modules/pages/support/support.component';
import { TechComponent } from './modules/pages/tech/tech.component';
import { SuggestionComponent } from './modules/pages/suggestion/suggestion.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { GlossaryComponent } from './modules/pages/glossary/glossary.component';
import { PostComponent } from './modules/pages/post/post.component';
import { SearchComponent } from './modules/pages/search/search.component';
import { AvailableCitiesComponent } from './modules/pages/available-cities/available-cities.component';
import { VideoModalComponent } from './modules/components/video-modal/video-modal.component';
import { NotificationsComponent } from './modules/components/notifications/notifications.component';
import { SearchFormComponent } from './modules/components/search-form/search-form.component';
import { SelectComponent } from './modules/components/select/select.component';
import { DatePickerRangeComponent } from './modules/components/date-picker-range/date-picker-range.component';
import { AutocompleteItemComponent } from './modules/components/autocomplete-item/autocomplete-item.component';
import { CardComponent } from './modules/components/card/card.component';
import { CarouselComponent } from './modules/components/carousel/carousel.component';
import { ContentComponent } from './modules/components/content/content.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { GoalsComponent } from './modules/components/goals/goals.component';
import { IconComponent } from './modules/components/icon/icon.component';
import { FormSentComponent } from './modules/components/form-sent/form-sent.component';
import { HomeEducacaoComponent } from './modules/pages/area-education/home/home.component';
import { CarouselEducacaoComponent } from './modules/pages/area-education/home/carousel/carousel.component';
import { CnpjComponent } from './modules/pages/area-education/cnpj/cnpj.component';
import { InfoCnpjComponent } from './modules/pages/area-education/cnpj/info-cnpj/info-cnpj.component';
import { PartnerComponent } from './modules/pages/area-education/cnpj/partner/partner.component';
import { HeaderEducationComponent } from './modules/pages/area-education/header/header.component';
import { LoginFormComponent } from './modules/pages/area-education/header/login-form/login-form.component';
import { StartSearchComponent } from './modules/pages/area-education/start-search/start-search.component';
import { SignupComponent } from './modules/pages/area-education/signup/signup.component';
import { AuthInterceptor } from './services/interceptor';
import { EducationFiltersComponent } from './modules/pages/area-education/search/filters/filters.component';
import { SearchEducationComponent } from './modules/pages/area-education/search/search.component';
import { ThemesFilterComponent } from './modules/pages/area-education/search/filters/themes-filter/themes-filter.component';
import { PeriodFilterComponent } from './modules/pages/area-education/search/filters/period-filter/period-filter.component';
import { CityFilterComponent } from './modules/pages/area-education/search/filters/city-filter/city-filter.component';
import { AboutEducationComponent } from './modules/pages/area-education/about/about.component';
import { ItemEducationComponent } from './modules/pages/area-education/search/item/item.component';
import { EduPaginationComponent } from './modules/pages/area-education/search/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    ComplaintComponent,
    AccessLevelsComponent,
    SupportComponent,
    TechComponent,
    SuggestionComponent,
    GlossaryComponent,
    PostComponent,
    SearchComponent,
    VideoModalComponent,
    DatePickerRangeComponent,
    AutocompleteItemComponent,
    NotificationsComponent,
    CarouselComponent,
    CardComponent,
    HeightDirective,
    WidthDirective,
    GoalsComponent,
    SearchFormComponent,
    SelectComponent,
    IconComponent,
    ContentComponent,
    ContainerComponent,
    ListComponent,
    ListItemComponent,
    ColumnComponent,
    RowComponent,
    ThemeDirective,
    InfosComponent,
    FlexWidthDirective,
    FlexHeightDirective,
    FormSentComponent,
    AvailableCitiesComponent,
    HomeEducacaoComponent,
    CarouselEducacaoComponent,
    CnpjComponent,
    InfoCnpjComponent,
    PartnerComponent,
    HeaderEducationComponent,
    LoginFormComponent,
    StartSearchComponent,
    SignupComponent,
    SearchEducationComponent,
    EducationFiltersComponent,
    ThemesFilterComponent,
    PeriodFilterComponent,
    CityFilterComponent,
    AboutEducationComponent,
    ItemEducationComponent,
    EduPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,

    HttpClientModule,
    FlexLayoutModule,

    IvyCarouselModule,

    NgxPaginationModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe((e) => {
        if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          const anchor = e.anchor;
          // not the best approach
          setTimeout(() => {
            // anchor navigation
            viewportScroller.scrollToAnchor(anchor);
          }, 1000);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
