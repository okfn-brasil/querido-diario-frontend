import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccessLevelsComponent } from './pages/access-levels/access-levels.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SearchComponent } from './pages/search/search.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { SupportComponent } from './pages/support/support.component';
import { TechComponent } from './pages/tech/tech.component';
import { PostComponent } from './pages/post/post.component';


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
  { path: 'conteudo/o-que-os-diarios-oficiais-contam-sobre-a-lgpd-nos-municipios', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
