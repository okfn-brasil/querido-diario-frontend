from playwright.sync_api import Page, BrowserContext
import unicodedata
import logging

class DadosPage:

  head_dados = "dados-head"

  button_pesquisar = "btn-pesquisar-dados"
  button_download = '[class="btn-download"]'

  input_estado = '[id="state-filter-data"]'
  input_municipio = '[id="location-filter-data"]'

  label_resultado_busca = "texto-busca-estado"

  dropdown_state = "state-dropdown"
  dropdown_municipio = '[class="dropdown"]'

  def __init__(self, browser : BrowserContext):
    self.browser = browser
    self.page = browser.new_page()

  # def wait_main_fields(self):
  #   self.page.locator("").wait_for(state='visible')

  def click_on_header_dados(self):
    """
    Este metodo clica no link 'Dados' no header da pagina principal
    """
    self.page.get_by_test_id(self.head_dados).click()

  def click_on_pesquisar_button(self):
    """
    Este metodo clica no botão 'Pesquisar' na página principal
    """
    self.page.get_by_test_id(self.button_pesquisar).click()

  def click_on_estado_dropdown(self, state: str):
    """
       Este metodo clica na opcao desejada no dropdown de estados
    """
    dropdown_state = self.page.get_by_test_id(self.dropdown_state)

    # Verifica se o dropdown esta visivel
    dropdown_state.is_visible()

    # Clica na opcao desejada baseado no texto recebido
    dropdown_state.get_by_text(state).click()

  def click_on_municipio_dropdown(self, city_option : str):
    """
      Este metodo clica na opcao desejada no dropdown de municipios
    """
    # Busca o elemento do dropdown
    dropdown_class_option = '[class="option has-level"]'

    # # Formata o unicode do texto (pois contera acentos)
    normalized_text = unicodedata.normalize("NFC", city_option)

    # Verifica se o dropdown esta visivel
    self.page.locator(self.dropdown_municipio).is_visible()

    # Clica na opcao do dropdown baseada no texto fornecido
    self.page.locator(dropdown_class_option).get_by_text(normalized_text).click()

  def click_on_download_button(self):
    """
      Este metodoc clica no botao 'Baixar' quando resultados sao encontrados
    """
    self.page.locator(self.button_download).click()

  def fill_estado_input(self, text: str):
    """
    Este metodo preenche o campo 'Estado' com o texto escolhido
    """
    self.page.locator(self.input_estado).click()
    self.page.keyboard.type(text, delay=500)

  def fill_municipio_input(self, text: str):
    """
      Este metodo preenche o campo 'Municipio' com o texto escolhido
    """
    self.page.locator(self.input_municipio).click()
    self.page.keyboard.type(text, delay=500)
