from playwright.sync_api import Page, BrowserContext

class TecnologiaPage:

  link_doe = "link-Doe"
  link_documentacao = "link-Documentação"
  link_relatorios = "link-Relatórios"
  link_busca_avancada ="link-Busca Avançada"
  link_repositorios = '[href="https://github.com/orgs/okfn-brasil/repositories?q=querido-diario"]'
  link_repositorio_raspadores = '[href="https://github.com/okfn-brasil/querido-diario"]'
  link_repositorio_processamento_dados = '[href="https://github.com/okfn-brasil/querido-diario-data-processing"]'
  link_repositorio_frontend = '[href="https://github.com/okfn-brasil/querido-diario-frontend"]'
  link_discord='[href="https://go.ok.org.br/discord"]'
  link_agenda_comunidade= '[href="https://go.ok.org.br/agenda-comunidade"]'

  button_acessar_relatorios="link-Acessar"

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

  def click_on_link_repositorios(self):
    """
      Este metodo clica no link dos repositórios do Querido Diário
    """
    self.page.locator(self.link_repositorios).click()

  def click_on_link_raspadores(self):
    """
      Este metodo clica no link do repositorios dos raspadores do Querido Diário
    """
    self.page.locator(self.link_repositorio_raspadores).click()

  def click_on_link_processamento_de_dados(self):
    """
      Este metodo clica no link do repositorios dos processadores de dados do Querido Diário
    """
    self.page.locator(self.link_repositorio_processamento_dados).click()

  def click_on_link_repo_frontend(self):
    """
      Este metodo clica no link do repositorio frontend do Querido Diário
    """
    self.page.locator(self.link_repositorio_frontend).click()

  def click_on_link_discord(self):
    """
      Este metodo clica no link do servidor do Discord do Querido Diário
    """
    self.page.locator(self.link_discord).click()

  def click_on_link_agenda_comunidade(self):
    """
      Este metodo clica no link 'Agenda da comunidade' do Querido Diário
    """
    self.page.locator(self.link_agenda_comunidade).click()

  def click_on_acessar_relatorio_button(self):
    """
          Este metodo clica no botao 'Acessar' na parte do Relatorio tecnico
        """
    button_acessar =  self.page.get_by_test_id(self.button_acessar_relatorios)
    button_acessar.scroll_into_view_if_needed()
    button_acessar.click()
