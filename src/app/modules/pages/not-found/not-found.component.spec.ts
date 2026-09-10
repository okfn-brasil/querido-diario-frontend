import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ContainerComponent } from '../../layout/container/container.component';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let meta: Meta;
  let title: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent, ContainerComponent],
      imports: [RouterTestingModule],
      providers: [Meta, Title]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
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

  // Cenário 4: link para a home é exibido
  it('deve exibir um link para a página inicial', () => {
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe('/');
    expect(link.textContent).toContain('Ir para a página inicial');
  });

  // Cenário 5: conteúdo textual esperado aparece no template
  it('deve exibir o título e a mensagem de página indisponível', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Página não encontrada');
    expect(compiled.textContent).toContain('A página que você está procurando não está disponível.');
  });
});
