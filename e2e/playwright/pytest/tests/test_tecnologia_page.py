import logging
import pytest
from playwright.sync_api      import expect
from  util.constants          import Constants as c
from  pages.page_tecnologia   import TecnologiaPage

"""
Este arquivo executa testes E2E
Testes são executados na Página -> https://queridodiario.ok.org.br/tecnologia

"""

@pytest.fixture(scope="function")
def tecnolgia_page(browser_context) -> TecnologiaPage:
  tecnologia_page = TecnologiaPage(browser_context)
  tecnologia_page.page.goto("/tecnologia")
  return tecnologia_page

@pytest.fixture(scope="function", autouse=True)
def before_after_each(request):
  test_case_name = request.node.name
  logging.info(c.TEXT_SETUP_SCENARIO)

  yield
  logging.info(c.TEXT_TEARDOWN_SCENARIO)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_doe(tecnolgia_page):
  """
          Cenário de teste:
           Verificar ao clicar no link 'Doe' se abre uma nova aba com a URL do Catarse
  """

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Doe' e clica nele
    tecnolgia_page.click_on_link_doe()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_CATARSE)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_documentacao(tecnolgia_page):
  """
         Cenário de teste:
            Verificar ao clicar no link 'Documentação'' se abre uma nova aba com a URL da documentação do QD
   """
  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Documentação' e clica nele
    tecnolgia_page.click_on_link_documentacao()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_DOCUMENTACAO)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_relatorios(tecnolgia_page):
  """
    Cenário de teste:
             Verificar ao clicar no link 'Relatórios' se a URL é alterada corretamente
    """
  # Vai até o link de 'Relatórios' e clica nele
  tecnolgia_page.click_on_link_relatorios()

  # Verifica a URL
  expect(tecnolgia_page.page).to_have_url("/tecnologia#relatorios")


@pytest.mark.pagina_tecnologia
def test_acessar_relatorio_tecnico(tecnolgia_page):
  """
          Cenário de teste:
           Verificar ao clicar para acessar o relatório técnico, se uma nova aba é aberta com o PDF do relatório técnico
  """

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o botao 'Acessar' na parte do relatorio tecnico e clica nele
    tecnolgia_page.click_on_acessar_relatorio_button()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_RELATORIO_TECNICO)


@pytest.mark.pagina_tecnologia
def test_clicar_no_link_busca_avancada(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar para acessar o relatório técnico, se uma nova aba é aberta com o PDF do relatório técnico
   """
  # Vai até o link de 'Busca Avancada' e clica nele
  tecnolgia_page.click_on_link_busca_avancada()

  # Verifica a URL
  expect(tecnolgia_page.page).to_have_url("tecnologia/busca-avancada")

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_repositorios(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar para acessar os repositórios, se uma nova aba é aberta com a página da OKBR no git contendo todos os repositórios
   """

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Repositórios' e clica nele
    tecnolgia_page.click_on_link_repositorios()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIOS_GITHUB)


@pytest.mark.pagina_tecnologia
def test_clicar_no_link_raspadores(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar no link dos Raspadores, se o usuário é redirecionado para o repositório dos raspadores
   """

  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Raspadores' e clica nele
    tecnolgia_page.click_on_link_raspadores()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_RASPADORES)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_processamento_de_dados(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar no link de Processamento de Dados , se uma nova aba é aberta com a URL do repositório de processamento de dados
   """
  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Processamento de dados' e clica nele
    tecnolgia_page.click_on_link_processamento_de_dados()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_PROCESSAMENTO_DADOS)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_frontend(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar no link do Frontend, se uma nova aba é aberta com a URL do repositório do frontend
   """
  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Repositório frontend' e clica nele
    tecnolgia_page.click_on_link_repo_frontend()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_REPOSITORIO_FRONTEND)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_discord(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar no link do Discord, se uma nova aba é aberta com a URL do servidor do discord
   """
  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Discord' e clica nele
    tecnolgia_page.click_on_link_discord()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_CONVITE_DISCORD)

@pytest.mark.pagina_tecnologia
def test_clicar_no_link_agenda_comunidade(tecnolgia_page):
  """
           Cenário de teste:
            Verificar ao clicar no link do Frontend, se uma nova aba é aberta com a google agenda do OKBR.
   """
  # Gatilho que verifica se uma nova página/aba foi aberta
  with tecnolgia_page.browser.expect_page() as new_page:
    # Vai até o link de 'Discord' e clica nele
    tecnolgia_page.click_on_link_agenda_comunidade()

  # Verifica a URL da nova aba aberta
  assert "https://calendar.google.com/" in new_page.value.url
