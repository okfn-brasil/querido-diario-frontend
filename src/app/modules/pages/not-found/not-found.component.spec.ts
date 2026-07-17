import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let meta: Meta;
  let title: Title;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [RouterTestingModule],
      providers: [Meta, Title]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
    router = TestBed.inject(Router);
  });

  // Cenário 1: componente é criado com sucesso
  it('deve criar o componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // Cenário 2: meta tag robots noindex/nofollow é aplicada
  it('deve adicionar a meta tag robots com noindex e nofollow', () => {
    fixture.detectChanges();
    const robotsTag = meta.getTag('name="robots"');
    expect(robotsTag).toBeTruthy();
    expect(robotsTag?.content).toBe('noindex, nofollow');
  });

  // Cenário 3: título da página é definido corretamente
  it('deve definir o título da página como "Página não encontrada - Querido Diário"', () => {
    fixture.detectChanges();
    expect(title.getTitle()).toBe('Página não encontrada - Querido Diário');
  });

  // Cenário 4: botão navega para a home ao ser clicado
  it('deve navegar para a rota inicial ao clicar no botão', () => {
    fixture.detectChanges();
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  // Cenário 5: conteúdo textual esperado aparece no template
  it('deve exibir o texto "404" e a mensagem de erro', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('404');
    expect(compiled.textContent).toContain('não existe ou foi movida');
  });
});
