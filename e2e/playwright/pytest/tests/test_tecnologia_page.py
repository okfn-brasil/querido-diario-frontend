import logging
import pytest
from playwright.sync_api import Page, expect, Browser
from e2e.playwright.pytest.pages.page_tecnologia import TecnologiaPage
from  e2e.playwright.pytest.util.constants import Constants as c


@pytest.fixture(scope="function")
def tecnolgia_page(browser_context) -> TecnologiaPage:
  tecnologia_page = TecnologiaPage(browser_context)
  tecnologia_page.page.goto("/tecnologia")
  return tecnologia_page

@pytest.fixture(scope="function", autouse=True)
def before_after_each():
  pass


@pytest.mark.pagina_tecnologia
def test_clicar_no_link_doe(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Doe' e clica nele
    tecnolgia_page.click_on_link_doe()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_CATARSE)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_documentacao(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Documentação' e clica nele
    tecnolgia_page.click_on_link_documentacao()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_DOCUMENTACAO)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_relatorios(tecnolgia_page):

  # Vai até o link de 'Relatórios' e clica nele
  tecnolgia_page.click_on_link_relatorios()

  # Verifica a URL
  expect(tecnolgia_page.page).to_have_url("/tecnologia#relatorios")

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_busca_avancada(tecnolgia_page):

  # Vai até o link de 'Relatórios' e clica nele
  tecnolgia_page.click_on_link_busca_avancada()

  # Verifica a URL
  expect(tecnolgia_page.page).to_have_url("tecnologia/busca-avancada")
