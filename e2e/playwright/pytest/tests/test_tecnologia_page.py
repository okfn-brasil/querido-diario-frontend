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
def test_acessar_relatorio_tecnico(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o botao 'Acessar' na parte do relatorio tecnico e clica nele
    tecnolgia_page.click_on_acessar_relatorio_button()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_RELATORIO_TECNICO)


@pytest.mark.pagina_tecnologia
def test_clicar_no_link_busca_avancada(tecnolgia_page):

  # Vai até o link de 'Busca Avancada' e clica nele
  tecnolgia_page.click_on_link_busca_avancada()

  # Verifica a URL
  expect(tecnolgia_page.page).to_have_url("tecnologia/busca-avancada")

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_repositorios(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Repositórios' e clica nele
    tecnolgia_page.click_on_link_repositorios()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIOS_GITHUB)


@pytest.mark.pagina_tecnologia
def test_clicar_no_link_raspadores(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Raspadores' e clica nele
    tecnolgia_page.click_on_link_raspadores()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_RASPADORES)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_processamento_de_dados(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Processamento de dados' e clica nele
    tecnolgia_page.click_on_link_processamento_de_dados()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_PROCESSAMENTO_DADOS)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_frontend(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Repositório frontend' e clica nele
    tecnolgia_page.click_on_link_repo_frontend()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_FRONTEND)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_discord(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Discord' e clica nele
    tecnolgia_page.click_on_link_discord()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_CONVITE_DISCORD)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_agenda_comunidade(tecnolgia_page):

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Discord' e clica nele
    tecnolgia_page.click_on_link_agenda_comunidade()

  # Verifica a URL da nova aba aberta
  assert "https://calendar.google.com/" in new_page.value.url
