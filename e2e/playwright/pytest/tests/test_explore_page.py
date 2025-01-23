import pytest
import time
import random

from  playwright.sync_api import Page, expect
from  e2e.playwright.pytest.pages.page_explore import ExplorePage
from  e2e.playwright.pytest.util.constants import Constants as c

class TestExplorePage:

  @pytest.fixture(scope="function")
  def explore_page(self, page: Page):
    explorepage = ExplorePage(page)
    explorepage.page.goto("/")
    return explorepage

  def before_after_each(self):
    pass

@pytest.mark.TC001
@pytest.mark.pagina_explore
def test_busca_diario_oficial_sudeste(self, explore_page):
    """
      Teste ID: TC001
      Cenário de teste: Fazer uma busca por um diário oficial em um município na região Sudeste do Brasil
      Passos:
             1. Acessar a página https://queridodiario.ok.org.br/
             2. Clicar no botão "Dados"
             3. No campo de busca digitar "Licitação"
             4. No campo de Município, digitar um município situado na região Sudeste
             5. No campo de Período, selecione o período deum ano (retroativo).
             6. Clique no botão "Pesquisar"
    """

    # municipio = random.choice(c.cidades_por_regiao["Sudeste"])
    # Dados do Teste
    municipio_state = "Paulínia (SP)"
    # Remove qualquer texto após a primeira '(' encontrada na string, para ficar apenas o nome do município
    municipio = municipio_state.split('(')[0].strip()

    # Clica no botão de aba 'Explore'
    explore_page.click_on_header_explore()

    # Preenche com dados o campo texto para pesquisa de licitação, diários oficiais, etc
    explore_page.fill_conteudo_input("Licitação")

    # Preenche o municipio o qual sera pesquisado
    explore_page.fill_municipio_input(municipio)

    # Seleciona opção no dropdown
    explore_page.click_on_municipio_dropdown(municipio_state)

    # Preenche o periodo da pesquisa
    explore_page.fill_periodo_input(start="10/02/2022", end="10/10/2022")

    # Clica no botão 'Pesquisar'
    explore_page.click_on_pesquisar_button()

    # Verifica se todos os resultados sao do municipio fornecido
    for locator in explore_page.page.locator(explore_page.label_resultado).all():
      expect(locator).to_have_text(municipio_state)



