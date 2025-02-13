from playwright.sync_api import Page, BrowserContext

class TecnologiaPage:

  link_doe = "link-Doe"
  link_documentacao = "link-Documentação"
  link_relatorios = "link-Relatórios"
  link_busca_avancada ="link-Busca Avançada"

  def __init__(self, browser: BrowserContext):
    self.browser = browser
    self.page = browser.new_page()


  def click_on_link_doe(self):
    """
      Este metodo clica no link 'Doe'
    """
    self.page.get_by_test_id(self.link_doe).click()

  def click_on_link_documentacao(self):
    """
      Este metodo clica no link 'Documentacao'
    """
    self.page.get_by_test_id(self.link_documentacao).click()

  def click_on_link_relatorios(self):
    """
      Este metodo clica no link 'Relatorios'
    """
    self.page.get_by_test_id(self.link_relatorios).click()

  def click_on_link_busca_avancada(self):
    """
      Este metodo clica no link 'Busca Avançada'
    """
    self.page.get_by_test_id(self.link_busca_avancada).click()

