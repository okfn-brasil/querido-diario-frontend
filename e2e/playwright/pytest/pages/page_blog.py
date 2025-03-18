from playwright.sync_api import Page, BrowserContext
import unicodedata
import logging

class BlogPage:

  link_historia = "História"
  link_querido_nas_univ = "Querido Diário nas Universidades"
  link_casos_de_uso = "Casos de Uso"
  link_comunidade_e_tec = "Comunidade e Tecnologia"
  link_diario_do_clima = "Diário do Clima"
  link_tecnologias_educacao = "Tecnologias na Educação"

  class_post = '[class="post"]'
  category_post = '[class="category"]'


  def __init__(self, browser : BrowserContext):
    self.browser = browser
    self.page = browser.new_page()



  def click_on_historia_button(self):
    """
    Este metodo clica no link 'Histórias' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_historia).click()

  def click_on_queri_diario_nas_unis_button(self):
    """
    Este metodo clica no link 'Querido Diário nas Universidades' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_querido_nas_univ).click()

  def click_on_casos_de_uso_button(self):
    """
    Este metodo clica no link 'Casos de Uso' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_casos_de_uso).click()

  def click_on_comunidade_tecnologia_button(self):
    """
    Este metodo clica no link 'Comunidade e Tecnologia' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_comunidade_e_tec).click()

  def click_on_diario_clima_button(self):
    """
    Este metodo clica no link 'Diário do Clima' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_diario_do_clima).click()

  def click_on_tecnologia_educacao_button(self):
    """
    Este metodo clica no link 'Tecnologia na Educação' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_tecnologias_educacao).click()

  def get_post_titles(self):
    return self.page.locator(self.class_post).all()
