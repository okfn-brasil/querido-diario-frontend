import pytest
import time
import random
import logging
from playwright.sync_api import Page, expect, Browser
from  e2e.playwright.pytest.pages.page_explore import ExplorePage
from  e2e.playwright.pytest.util.constants import Constants as c



@pytest.fixture(scope="function")
def explore_page(browser_context) -> ExplorePage:
  explorepage = ExplorePage(browser_context)
  explorepage.page.goto("/")
  explorepage.wait_main_fields()

  return explorepage

def before_after_each(self):
  pass

@pytest.mark.TC001
@pytest.mark.TC002
@pytest.mark.TC003
@pytest.mark.TC004
@pytest.mark.TC005
@pytest.mark.pagina_explore
@pytest.mark.parametrize("municipio_state", ["Paulínia (SP)", "Campo Largo (PR)", "Jaru (RO)", "Afonso Cunha (MA)", "Bela Vista (MS)"])
def test_buscar_licitacao_todas_regioes_brasil(explore_page : ExplorePage, municipio_state):
    """
      Teste ID: TC001, TC002, TC003, TC004, TC005
      Cenário de teste:
        Fazer uma busca por um diário oficial em um município, este teste valida 1 município nas 5 regiões do Brasil (Norte, Nordeste, Sudeste, Sul e Centro-Oeste)
    """
  # municipio = random.choice(c.cidades_por_regiao["Sudeste"])
  # Dados do Teste
  # municipio_state = "Paulínia (SP)"
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


def test_abrir_uma_noticia(explore_page: ExplorePage, base_url):

  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()

  # Gatilho que verifica se uma nova página/aba foi aberta
  with explore_page.browser.expect_page() as new_page:
    # Vai até as noticias e clica em uma notícia baseada no índice especificado
    explore_page.click_on_noticia_link_based_on_index(3)

  expect(new_page.value).not_to_have_url(base_url+"/")



