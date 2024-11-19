from playwright.sync_api import Page

class ExplorePage:

  # Locators
  head_explore     = "explore-head"
  head_dados       = "dados-head"
  head_blog        = "blog-head"
  head_tecnologia  = "tecnologia-head"
  head_sobre       = "sobre-head"

  button_pesquisar    = "btn-pesquisar"

  input_conteudo  = "conteudo-campo"
  input_municipio = "municipio-campo"
  input_inicio_periodo = "data-inicio-periodo"
  input_fim_periodo = "data-fim-periodo"

  # Textos
  TEXT_EXPLORE_PAGE = "Explore diários oficiais municipais..."

  def __init__(self, page : Page):
    self.page = page

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

  def fill_municipio_input(self, text: str):
    """
    Este metodo insere texto no campo "Municipio"
    :param text: string a ser inserida no campo
    """
    self.page.get_by_test_id(self.input_municipio).fill(str(text))

  def fill_conteudo_input(self, text: str):
    """
    Este metodo insere texto no campo "Conteudo (Licitacao, contratacao, etc)"
       :param text: string a ser inserida no campo
    """
    self.page.get_by_test_id(self.input_municipio).fill(str(text))

  def fill_periodo_input(self, start: str, end: str):
    """
    Este metodo preenche o campo de "Periodo", composto por uma data de inicio e uma data fim

    :param start: string - data de inicio do periodo - dd/mm/aaaa
    :param end: string - data de fim do periodo - dd/mm/aaaa

    """
    self.page.get_by_test_id(self.input_inicio_periodo).fill(str(start))
    self.page.get_by_test_id(self.input_fim_periodo).fill(str(end))

