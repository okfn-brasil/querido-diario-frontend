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

  def __init__(self, browser : BrowserContext):
    self.browser = browser
    self.page = browser.new_page()



  def click_on_historia_button(self):
    """
    Este metodo clica no link 'Histórias' na aba de opções da tela
    """
    self.page.get_by_test_id(self.link_historia).click()
