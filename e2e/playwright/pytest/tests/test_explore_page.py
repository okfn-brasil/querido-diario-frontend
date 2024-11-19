import pytest
from  playwright.sync_api import Page, expect
from  e2e.playwright.pytest.pages.page_explore import ExplorePage

class TestHomePage:

  @pytest.fixture(scope="function")
  def explore_page(self, page: Page):
    explorepage = ExplorePage(page)
    explorepage.page.goto("/")
    return explorepage

  def before_after_each(self):
    pass

  def test_validate_explore_header_link(self, explore_page):
    """
    Cenário de Teste:
      Este teste valida se a página é rediricionada para a rota (url) correta ao clicar no header 'Explore'
      e se o texto "Explore diários oficiais municipais..." é exibido.
    """
    explore_page.click_on_header_explore()
    expect(explore_page.page).to_have_url('/')
    expect(explore_page.page.get_by_text(explore_page.TEXT_EXPLORE_PAGE)).to_be_visible()



