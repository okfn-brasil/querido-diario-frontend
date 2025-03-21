import pytest
import time
import logging

from  playwright.sync_api import Page, expect, Browser
from  util.constants      import Constants as c
from  pages.page_sobre    import SobrePage


@pytest.fixture(scope="function")
def sobre_page(browser_context) -> SobrePage:
  sobre_page = SobrePage(browser_context)
  sobre_page.page.goto("/sobre")
  return sobre_page


@pytest.fixture(scope="function", autouse=True)
def before_after_each(request, sobre_page):
  test_case_name = request.node.name
  logging.info(c.TEXT_SETUP_SCENARIO)


  if "clicar_no_link_motivacao" in test_case_name:
        sobre_page.click_on_link_politica_privacidade()
        time.sleep(3)

  yield
  logging.info(c.TEXT_TEARDOWN_SCENARIO)

@pytest.mark.pagina_sobre
def test_clicar_no_link_motivacao(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_motivacao)

  # Clica no link do início da página 'Motivação'
  sobre_page.click_on_link_motivacao()
  # Valida se a label da seção 'Motivação' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#motivacao")

@pytest.mark.pagina_sobre
def test_clicar_no_botao_doe(sobre_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with sobre_page.browser.expect_page() as new_page:
    # Vai até o botão 'Doe' e clica nele
    sobre_page.click_on_doe_button()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_CATARSE)

@pytest.mark.pagina_sobre
def test_clicar_no_link_historia(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_historia)

  # Clica no link do início da página 'Historia'
  sobre_page.click_on_link_historia()
  # Valida se a label da seção 'Historia' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#historia")

@pytest.mark.pagina_sobre
def test_clicar_no_link_casos_de_uso(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_casos)

  # Clica no link do início da página 'Casos de uso'
  sobre_page.click_on_link_casos_de_uso()
  # Valida se a label da seção 'Casos de uso' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#casos")

@pytest.mark.pagina_sobre
def test_clicar_no_link_na_midia(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_midia)

  # Clica no link do início da página 'Na mídia'
  sobre_page.click_on_link_na_midia()
  # Valida se a label da seção 'Na mídia' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#midia")

@pytest.mark.pagina_sobre
def test_clicar_no_link_quem_somos(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_quemsomos)

  # Clica no link do início da página 'Quem somos'
  sobre_page.click_on_link_quem_somos()
  # Valida se a label da seção 'Quem somos' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#quem-somos")

@pytest.mark.pagina_sobre
def test_clicar_no_link_saiba_mais(sobre_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with sobre_page.browser.expect_page() as new_page:
    # Vai até o link de 'Quem somos' e clica nele
    sobre_page.click_on_link_quemsomos()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_ORG)


@pytest.mark.pagina_sobre
def test_clicar_no_link_poltilica_de_privacidade(sobre_page):
  locator_header = sobre_page.page.get_by_test_id(sobre_page.head_privacidade)

  # Clica no link do início da página 'Política de Privacidade'
  sobre_page.click_on_link_politica_privacidade()
  # Valida se a label da seção 'Privacidade' é exibida na tela
  expect(locator_header).to_be_in_viewport()
  # Valida se URL é alterada
  expect(sobre_page.page).to_have_url("/sobre#privacidade")


