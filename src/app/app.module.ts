import { ViewportScroller } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, Scroll } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { filter } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexHeightDirective } from './directives/flex-height/flex-height.directive';
import { FlexWidthDirective } from './directives/flex-width/flex-width.directive';
import { HeightDirective } from './directives/height/height.directive';
import { ThemeDirective } from './directives/theme/theme.directive';
import { WidthDirective } from './directives/width/width.directive';
import { EnvServiceProvider } from './env.service.provider';
import { AggregateDataComponent } from './modules/components/aggregate-data/aggregate-data.component';
import { AutocompleteItemComponent } from './modules/components/autocomplete-item/autocomplete-item.component';
import { CardComponent } from './modules/components/card/card.component';
import { CarouselComponent } from './modules/components/carousel/carousel.component';
import { CitiesSearchResultComponent } from './modules/components/cities-search-result/cities-search-result.component';
import { ContentComponent } from './modules/components/content/content.component';
import { AggregateFormComponent } from './modules/components/aggregate-form/aggregate-form.component';
import { DatePickerRangeComponent } from './modules/components/date-picker-range/date-picker-range.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FormSentComponent } from './modules/components/form-sent/form-sent.component';
import { GoalsComponent } from './modules/components/goals/goals.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { IconComponent } from './modules/components/icon/icon.component';
import { InfosComponent } from './modules/components/infos/infos.component';
import { ListItemComponent } from './modules/components/list-item/list-item.component';
import { ListComponent } from './modules/components/list/list.component';
import { ModalComponent } from './modules/components/modal/modal.component';
import { NotificationsComponent } from './modules/components/notifications/notifications.component';
import { SearchFormComponent } from './modules/components/search-form/search-form.component';
import { SelectComponent } from './modules/components/select/select.component';
import { VideoModalComponent } from './modules/components/video-modal/video-modal.component';
import { ColumnComponent } from './modules/layout/column/column.component';
import { ContainerComponent } from './modules/layout/container/container.component';
import { RowComponent } from './modules/layout/row/row.component';
import { AboutComponent as AboutComponentEnUS } from './modules/pages/about-en_US/about.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { AccessLevelsComponent } from './modules/pages/access-levels/access-levels.component';
import { AboutEducationComponent } from './modules/pages/area-education/about/about.component';
import { AlertItemComponent } from './modules/pages/area-education/alerts/alert-item/alert-item.component';
import { AlertModalComponent } from './modules/pages/area-education/alerts/alert-modal/alert-modal.component';
import { AlertsComponent } from './modules/pages/area-education/alerts/alerts.component';
import { EditEmailComponent } from './modules/pages/area-education/alerts/edit-email/edit-email.component';
import { CnpjComponent } from './modules/pages/area-education/cnpj/cnpj.component';
import { InfoCnpjComponent } from './modules/pages/area-education/cnpj/info-cnpj/info-cnpj.component';
import { PartnerComponent } from './modules/pages/area-education/cnpj/partner/partner.component';
import { HeaderEducationComponent } from './modules/pages/area-education/header/header.component';
import { LoginFormComponent } from './modules/pages/area-education/header/login-form/login-form.component';
import { ResetPassModalComponent } from './modules/pages/area-education/header/reset-pass-modal/reset-pass-modal.component';
import { CarouselEducacaoComponent } from './modules/pages/area-education/home/carousel/carousel.component';
import { HomeEducacaoComponent } from './modules/pages/area-education/home/home.component';
import { ModalsComponent } from './modules/pages/area-education/modals/modals.component';
import { PassResetComponent } from './modules/pages/area-education/pass-reset/pass-reset.component';
import { ReportDetailComponent } from './modules/pages/area-education/report-detail/report-detail.component';
import { AdvancedModalComponent } from './modules/pages/area-education/search/advanced-modal/advanced-modal.component';
import { CityFilterComponent } from './modules/pages/area-education/search/filters/city-filter/city-filter.component';
import { EducationFiltersComponent } from './modules/pages/area-education/search/filters/filters.component';
import { PeriodFilterComponent } from './modules/pages/area-education/search/filters/period-filter/period-filter.component';
import { ThemesFilterComponent } from './modules/pages/area-education/search/filters/themes-filter/themes-filter.component';
import { ItemEducationComponent } from './modules/pages/area-education/search/item/item.component';
import { EduPaginationComponent } from './modules/pages/area-education/search/pagination/pagination.component';
import { SearchEducationComponent } from './modules/pages/area-education/search/search.component';
import { SignupComponent } from './modules/pages/area-education/signup/signup.component';
import { StartSearchComponent } from './modules/pages/area-education/start-search/start-search.component';
import { AvailableCitiesComponent } from './modules/pages/available-cities/available-cities.component';
import { BlogCategoriesComponent } from './modules/pages/blog/blog-categories/blog-categories.component';
import { BlogHeaderComponent } from './modules/pages/blog/blog-header/blog-header.component';
import { RequestAnalysisFormComponent } from './modules/pages/area-education/request-analysis-form/request-analysis-form.component';
import { PeriodPickerComponent } from './modules/components/period-picker/period-picker.component';
import { NgxMaskModule } from 'ngx-mask';
import { BlogListComponent } from './modules/pages/blog/blog-list/blog-list.component';
import { BlogPostDetailComponent } from './modules/pages/blog/blog-post-detail/blog-post-detail.component';
import { BlogPostComponent } from './modules/pages/blog/blog-post/blog-post.component';
import { BlogRelatedsComponent } from './modules/pages/blog/blog-relateds/blog-relateds.component';
import { ComplaintComponent } from './modules/pages/complaint/complaint.component';
import { AggregateSearchComponent } from './modules/pages/aggregate-search/aggregate-search.component';
import { AggregateComponent } from './modules/pages/aggregate/aggregate.component';
import { GlossaryComponent } from './modules/pages/glossary/glossary.component';
import { HomeComponent } from './modules/pages/home/home.component';
import {
  PrivacyPolicyComponent as PrivacyPolicyComponentEnUS,
} from './modules/pages/privacy-policy-en_US/privacy-policy.component';
import { PrivacyPolicyComponent } from './modules/pages/privacy-policy/privacy-policy.component';
import { SearchTutorialComponent } from './modules/pages/search-tutorial/search-tutorial.component';
import { SearchComponent } from './modules/pages/search/search.component';
import { SuggestionComponent } from './modules/pages/suggestion/suggestion.component';
import { SupportComponent } from './modules/pages/support/support.component';
import { TechComponent as TechComponentEnUS } from './modules/pages/tech-en_US/tech.component';
import { TechComponent } from './modules/pages/tech/tech.component';
import { AuthInterceptor } from './services/interceptor';
import { AggregateStateFilterComponent } from './modules/pages/aggregate/filters/state-filter/aggregate-state-filter.component';
import { AggregateCityFilterComponent } from './modules/pages/aggregate/filters/city-filter/aggregate-city-filter.component';

/* custom directives */
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
    AggregateComponent,
    SuggestionComponent,
    GlossaryComponent,
    SearchTutorialComponent,
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
    AlertModalComponent,
    AlertsComponent,
    AlertItemComponent,
    ModalsComponent,
    EditEmailComponent,
    BlogListComponent,
    BlogCategoriesComponent,
    BlogPostComponent,
    BlogPostDetailComponent,
    BlogRelatedsComponent,
    BlogHeaderComponent,
    ReportDetailComponent,
    CitiesSearchResultComponent,
    AdvancedModalComponent,
    PassResetComponent,
    ResetPassModalComponent,
    AboutComponentEnUS,
    TechComponentEnUS,
    PrivacyPolicyComponentEnUS,
    RequestAnalysisFormComponent,
    PeriodPickerComponent,
    AggregateFormComponent,
    AggregateSearchComponent,
    AggregateCityFilterComponent,
    AggregateDataComponent,
    AggregateStateFilterComponent,
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
    MatSnackBarModule,
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
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    EnvServiceProvider,
  ],
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
