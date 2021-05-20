import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

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
import { H1Component } from './components/h1/h1.component';
import { H2Component } from './components/h2/h2.component';

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
    H1Component,
    H2Component,
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

    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
