import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/pages/about/about.component';
import { AccessLevelsComponent } from './modules/pages/access-levels/access-levels.component';
import { CnpjComponent } from './modules/pages/area-education/cnpj/cnpj.component';
import { HomeEducacaoComponent } from './modules/pages/area-education/home/home.component';
import { SearchEducationComponent } from './modules/pages/area-education/search/search.component';
import { SignupComponent } from './modules/pages/area-education/signup/signup.component';
import { StartSearchComponent } from './modules/pages/area-education/start-search/start-search.component';
import { AvailableCitiesComponent } from './modules/pages/available-cities/available-cities.component';
import { ComplaintComponent } from './modules/pages/complaint/complaint.component';
import { GlossaryComponent } from './modules/pages/glossary/glossary.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { PostComponent } from './modules/pages/post/post.component';
import { PrivacyPolicyComponent } from './modules/pages/privacy-policy/privacy-policy.component';
import { SearchComponent } from './modules/pages/search/search.component';
import { SuggestionComponent } from './modules/pages/suggestion/suggestion.component';
import { SupportComponent } from './modules/pages/support/support.component';
import { TechComponent } from './modules/pages/tech/tech.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'privacidade', component: PrivacyPolicyComponent },
  { path: 'informacoes', component: ComplaintComponent },
  { path: 'acesso', component: AccessLevelsComponent },
  { path: 'apoie', component: SupportComponent },
  { path: 'tecnologia', component: TechComponent },
  { path: 'sugestao', component: SuggestionComponent },
  { path: 'glossario', component: GlossaryComponent },
  { path: 'pesquisa', component: SearchComponent },
  { path: 'conteudo/o-que-os-diarios-oficiais-contam-sobre-a-lgpd-nos-municipios', component: PostComponent },
  { path: 'cidades-disponiveis', component: AvailableCitiesComponent },
  //area educação
  { path: 'educacao', component: HomeEducacaoComponent },
  { path: 'educacao/cnpj/:id', component: CnpjComponent },
  { path: 'educacao/comece', component: StartSearchComponent },
  { path: 'educacao/cadastrar', component: SignupComponent },
  { path: 'educacao/busca', component: SearchEducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
