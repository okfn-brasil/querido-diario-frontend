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

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { AccessLevelsComponent } from './pages/access-levels/access-levels.component';
import { SupportComponent } from './pages/support/support.component';
import { TechComponent } from './pages/tech/tech.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { SearchComponent } from './pages/search/search.component';
import { Event, Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { DatePickerRangeComponent } from './components/date-picker-range/date-picker-range.component';
import { AutocompleteItemComponent } from './components/autocomplete-item/autocomplete-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';

import { GoalsComponent } from './components/goals/goals.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SelectComponent } from './components/select/select.component';
import { IconComponent } from './components/icon/icon.component';
import { ContentComponent } from './components/content/content.component';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';

import { InfosComponent } from './infos/infos.component';


/* custom directives */
import { ThemeDirective } from './theme.directive';
import { HeightDirective } from './directives/height.directive';
import { WidthDirective } from './directives/width.directive';
import { FlexWidthDirective } from './directives/flex-width.directive';
import { FlexHeightDirective } from './directives/flex-height.directive';

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

    HttpClientModule,
    FlexLayoutModule,

    IvyCarouselModule,

    NgxPaginationModule,
  ],
  providers: [],
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
          // anchor navigation
          viewportScroller.scrollToAnchor(e.anchor);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
