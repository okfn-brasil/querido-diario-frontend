import pytest
import time
import random
import logging

from  playwright.sync_api   import Page, expect, Browser
from  util.constants        import Constants as c
from  pages.page_explore    import ExplorePage


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

@pytest.mark.TC006
@pytest.mark.pagina_explore
@pytest.mark.parametrize("noticia_index", range(0,10))
def test_abrir_link_de_uma_noticia(explore_page: ExplorePage, base_url, noticia_index):
  """
       Teste ID: TC006
       Cenário de teste:
          Verificar se os links das notícias exibidas no sistema estão funcionando corretamente.

      Obs: Neste caso, estavamos validando as 10 primeiras notícias do carrousel.
  """
  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()

  # Gatilho que verifica se uma nova página/aba foi aberta
  with explore_page.browser.expect_page() as new_page:
    # Vai até as noticias e clica em uma notícia baseada no índice especificado
    explore_page.click_on_noticia_link_based_on_index(noticia_index)

  expect(new_page.value).not_to_have_url(base_url+"/")

@pytest.mark.TC007
@pytest.mark.pagina_explore
def test_abrir_link_de_cidades_disponiveis(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC007
        Cenário de teste:
           Verificar se o link "Confira as cidades disponíveis" está funcionando corretamente
   """
  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()
  # Clica no link 'Cidades Disponíveis'
  explore_page.click_on_cidades_disponiveis_link()

  expect(explore_page.page).to_have_url(base_url+'/cidades-disponiveis')


@pytest.mark.TC008
@pytest.mark.pagina_explore
def test_abrir_link_de_nivel_de_acesso(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC008
        Cenário de teste:
          Verificar se o link 'Nível de Acesso' da seção 'Entenda' exibida no sistema está funcionando corretamente.
  """
  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()
  # Clica no link 'Nível de Acesso'
  explore_page.click_on_nivel_de_acesso_link()

  expect(explore_page.page).to_have_url(base_url+'/acesso')

@pytest.mark.TC009
@pytest.mark.pagina_explore
def test_abrir_link_de_glossario(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC009
        Cenário de teste:
           Verificar se o link 'Glossário' da seção 'Entenda' exibida no sistema está funcionando corretamente.
   """
  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()
  # Clica no link 'Glossario'
  explore_page.click_on_glossario_link()

  expect(explore_page.page).to_have_url(base_url+'/glossario')

@pytest.mark.TC010
@pytest.mark.pagina_explore
def test_abrir_link_de_denunciar_ou_pedir_informacoes(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC010
        Cenário de teste:
          Verificar se o link 'Como denunciar ou pedir informações da seção 'Entenda' exibida no sistema está funcionando corretamente.
  """

  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()
  # Clica no link 'Denunciar ou pedir informações'
  explore_page.click_on_denunciar_ou_pedir_info_link()

  expect(explore_page.page).to_have_url('/informacoes')

@pytest.mark.TC011
@pytest.mark.pagina_explore
def test_abrir_link_ver_todas_as_metas(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC011
        Cenário de teste:
          Verificar se o link 'Contribua financeiramente' da seção 'Apoio' exibida no sistema está funcionando corretamente.
  """

  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()

  # Gatilho que verifica se uma nova página/aba foi aberta
  with explore_page.browser.expect_page() as new_page:
    # Vai até o botão 'Ver todas as metas' e clica nele
    explore_page.click_on_ver_todas_as_metas_button()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_CATARSE)


@pytest.mark.TC012
@pytest.mark.pagina_explore
def test_abrir_link_contribua_com_desenvolvimento(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC012
        Cenário de teste:
          Verificar se o link 'Doe para a OKBR' da seção 'Apoio' exibida no sistema está funcionando corretamente.
  """

  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()

  # Clica no botão 'Comece por aqui'
  explore_page.click_on_comece_por_aqui_button()


  # Verifica a URL da nova aba aberta
  expect(explore_page.page).to_have_url("/tecnologia#contribua-com-c%C3%B3digo")



@pytest.mark.TC013
@pytest.mark.pagina_explore
def test_abrir_link_doe_para_okbr(explore_page: ExplorePage, base_url):
  """
        Teste ID: TC013
        Cenário de teste:
          Verificar se o link 'Doe para a OKBR' da seção 'Apoio' exibida no sistema está funcionando corretamente.
  """

  # Clica no botão de aba 'Explore'
  explore_page.click_on_header_explore()

  # Gatilho que verifica se uma nova página/aba foi aberta
  with explore_page.browser.expect_page() as new_page:
    # Vai até o botão 'Doe' e clica nele
    explore_page.click_on_doe_button()

  # Verifica a URL da nova aba aberta
  expect(new_page.value).to_have_url(c.URL_QD_APOIE)


