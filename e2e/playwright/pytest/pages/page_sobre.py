from playwright.sync_api import Page, BrowserContext, expect
import logging


class SobrePage:

  head_sobre = "sobre-head"
  head_motivacao = "header-motivacao"
  head_historia = "header-historia"
  head_casos    = "header-casos"
  head_midia  = "header-midia"
  head_quemsomos = "header-quemsomos"
  head_privacidade = "header-privacidade"

  button_doe = '[href="https://www.catarse.me/queridodiario-okbr"]'
  button_leiamais = 'leiamais-button'

  nav_menu = "nav-bar-option"
  nav_menu_headers = "head-title"

  link_motivacao = '[href="/sobre#motivacao"]'
  link_historia = '[href="/sobre#historia"]'
  link_quemsomos_saibamais= 'quemsomos-link'

  def __init__(self, browser : BrowserContext):
    self.browser = browser
    self.page = browser.new_page()


  def click_on_header_sobre(self):
    """
      Este metodo clica no  link 'Sobre' no header da pagina principal
    """
    self.page.get_by_test_id(self.head_sobre).click()

  def click_on_doe_button(self):
    """
       Este metodo clica no botao 'Doe' na secao de Motivacao
    """
    doe_button = self.page.locator(self.button_doe)

    doe_button.scroll_into_view_if_needed()
    doe_button.click()

  def click_on_leia_mais_button(self):
    """
       Este metodo clica no botao 'Doe' na secao de Motivacao
    """

  def click_on_link_motivacao(self):
    """
     Este metodo clica no link 'Motivacao'
    """

    locator_link_motivacao = self.page.get_by_test_id(self.nav_menu).get_by_text("Motivação")
    locator_link_motivacao.click()

  def click_on_link_quemsomos(self):
    """
        Este metodo clica no link 'Saiba mais' da seção 'Quem somos'
    """
    saibamais_link =  self.page.get_by_test_id(self.link_quemsomos_saibamais)
    saibamais_link.scroll_into_view_if_needed()
    saibamais_link.click()

  def click_on_link_historia(self):
    """
       Este metodo clica no link 'historia'
    """
    locator_link_historia = self.page.get_by_test_id(self.nav_menu).get_by_text("História")
    locator_link_historia.click()

  def click_on_link_casos_de_uso(self):
    """
       Este metodo clica no link 'Casos de uso'
    """
    locator_casos_de_uso = self.page.get_by_test_id(self.nav_menu).get_by_text("Casos de uso")
    locator_casos_de_uso.click()

  def click_on_link_na_midia(self):
    """
       Este metodo clica no link 'Na Mídia'
    """
    locator_midia = self.page.get_by_test_id(self.nav_menu).get_by_text("Na mídia")
    locator_midia.click()


  def click_on_link_quem_somos(self):
    """
       Este metodo clica no link 'Quem somos'
    """
    locator_midia = self.page.get_by_test_id(self.nav_menu).get_by_text("Quem somos")
    locator_midia.click()


  def click_on_link_politica_privacidade(self):
    """
       Este metodo clica no link 'Política de privacidade'
    """
    locator_midia = self.page.get_by_test_id(self.nav_menu).get_by_text("Política de privacidade")
    locator_midia.click()

