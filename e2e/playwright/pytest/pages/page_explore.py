
import logging
import time

import unicodedata

from playwright.sync_api import Page, Browser, BrowserContext


class ExplorePage:

  # Locators
  head_explore     = "explore-head"

  button_pesquisar    = "btn-pesquisar"
  button_proximo      = "próximo"
  button_anterior     = "anterior"
  button_ver_todas_metas = "Ver todas as metas"
  button_comece_por_aqui = "Comece por aqui"
  button_doe = '[href="https://ok.org.br/apoie/"]'

  input_conteudo  = "conteudo-campo"
  input_municipio = '[class="location-filter-educacao"]'
  input_inicio_periodo = "data-inicio-periodo"
  input_fim_periodo = "data-fim-periodo"

  dropdown_municipio = '[class="dropdown.ng-star-inserted"]'

  label_resultado = '[class="city-name"]'

  link_noticias_texto =  '[class="stories-text"]'
  link_cidades_disponveis = '[href="/cidades-disponiveis"]'
  link_nivel_de_acesso  = '[href="/acesso"]'
  link_glossario  = '[href="/glossario"]'
  link_denunciar_info = '[href="/informacoes"]'

  # Textos
  TEXT_EXPLORE_PAGE = "Explore diários oficiais municipais..."

  def __init__(self, browser: BrowserContext):
    self.browser = browser
    self.page = browser.new_page()

  def wait_main_fields(self):
    self.page.get_by_test_id(self.button_pesquisar).wait_for(state='visible')

  def click_on_header_explore(self):
    """
    Este metodo clica no link 'Explore' no header da pagina principal
    """
    self.page.get_by_test_id(self.head_explore).click()

  def click_on_pesquisar_button(self):
    """
    Este metodo clica no botão "Pesquisar"
    """
    self.page.get_by_test_id(self.button_pesquisar).click()

  def click_on_ver_todas_as_metas_button(self):
    """
        Este metodo clica no botão "Ver todas as metas"
    """
    self.page.get_by_text(self.button_ver_todas_metas).scroll_into_view_if_needed()
    self.page.get_by_text(self.button_ver_todas_metas).click()

  def click_on_comece_por_aqui_button(self):
    """
            Este metodo clica no botão "Comece por aqui"
        """
    self.page.get_by_text(self.button_comece_por_aqui).scroll_into_view_if_needed()
    self.page.get_by_text(self.button_comece_por_aqui).click()

  def click_on_doe_button(self):
    """
                Este metodo clica no botão "Doe"
    """
    self.page.locator(self.button_doe).scroll_into_view_if_needed()
    self.page.locator(self.button_doe).click()

  def click_on_municipio_dropdown(self, city_option: str):
    """
    Este metodo clica na opcao desejada no dropdown de municipios
    """
    # Busca o elemento do dropdown
    dropdown_class_option = '[class="option has-level ng-star-inserted"]'

    # Formata o unicode do texto (pois contera acentos)
    normalized_text = unicodedata.normalize("NFC", city_option)

    # Verifica se o dropdown esta visivel
    self.page.locator(self.dropdown_municipio).is_visible()

    # Clica na opcao do dropdown baseada no texto fornecido
    self.page.locator(dropdown_class_option).get_by_text(normalized_text).click()

  def click_on_noticia_link_based_on_index(self, index : int ):

    noticias_cards = self.page.get_by_test_id("cartao-post").all()
    noticia_card = noticias_cards[index]
    noticia_card.scroll_into_view_if_needed()
    while not noticia_card.is_visible():
      self.page.get_by_alt_text(self.button_proximo).click()

    noticia_card.get_by_test_id("cartao-link").click()

  def click_on_cidades_disponiveis_link(self):
      self.page.locator(self.link_cidades_disponveis).scroll_into_view_if_needed()
      self.page.locator(self.link_cidades_disponveis).click()

  def click_on_nivel_de_acesso_link(self):
      self.page.locator(self.link_nivel_de_acesso).scroll_into_view_if_needed()
      self.page.locator(self.link_nivel_de_acesso).click()

  def click_on_glossario_link(self):
    self.page.locator(self.link_glossario).scroll_into_view_if_needed()
    self.page.locator(self.link_glossario).click()

  def click_on_denunciar_ou_pedir_info_link(self):
    self.page.locator(self.link_denunciar_info).scroll_into_view_if_needed()
    self.page.locator(self.link_denunciar_info).click()

  def fill_municipio_input(self, text: str):
    """
    Este metodo insere texto no campo "Municipio"
    :param text: string a ser inserida no campo
    """
    self.page.get_by_test_id(self.input_conteudo).click()
    self.page.keyboard.press('Tab')
    self.page.keyboard.type(text, delay=500)

  def fill_conteudo_input(self, text: str):
    """
    Este metodo insere texto no campo "Conteudo (Licitacao, contratacao, etc)"
       :param text: string a ser inserida no campo
    """
    self.page.get_by_test_id(self.input_conteudo).fill(str(text))

  def fill_periodo_input(self, start: str, end: str):
    """
    Este metodo preenche o campo de "Periodo", composto por uma data de inicio e uma data fim

    :param start: string - data de inicio do periodo - dd/mm/aaaa
    :param end: string - data de fim do periodo - dd/mm/aaaa

    """
    self.page.get_by_test_id(self.input_inicio_periodo).fill(str(start))
    self.page.get_by_test_id(self.input_fim_periodo).fill(str(end))


