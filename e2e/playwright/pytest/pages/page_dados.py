from playwright.sync_api import Page

class DadosPage:
  def __init__(self, page: Page):
    self.page = page
