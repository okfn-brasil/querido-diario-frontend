import pytest
import logging
from playwright.sync_api import expect

from e2e.playwright.pytest.pages.page_blog import BlogPage
from  util.constants      import Constants as c



@pytest.fixture(scope="function")
def blog_page(browser_context) -> BlogPage:
  blogpage = BlogPage(browser_context)
  blogpage.page.goto("/blog")
#  blogpage.wait_main_fields()

  return blogpage


@pytest.fixture(scope="function", autouse=True)
def before_after_each(request):
  test_case_name = request.node.name
  logging.info(c.TEXT_SETUP_SCENARIO)

  yield
  logging.info(c.TEXT_TEARDOWN_SCENARIO)


@pytest.mark.pagina_blog
def test_clicar_no_link_historia(blog_page: BlogPage):

  # Gatilho que verifica se uma nova página/aba foi aberta
  blog_page.click_on_historia_button()

  # Verifica a URL da nova aba aberta
  expect(blog_page.page).to_have_url('blog/Hist%C3%B3ria')

def test_check_historia_page(blog_page: BlogPage):
  blog_page.click_on_queri_diario_nas_unis_button()
  expect(blog_page.page).to_have_url('blog/Querido%20Di%C3%A1rio%20nas%20Universidades')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Querido Diário nas Universidades")

def test_check_casos_de_uso_page(blog_page: BlogPage):
  blog_page.click_on_casos_de_uso_button()
  expect(blog_page.page).to_have_url('blog/Casos%20de%20Uso')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Casos de Uso")

def test_check_comunidade_tecnologia_page(blog_page: BlogPage):
  blog_page.click_on_comunidade_tecnologia_button()
  expect(blog_page.page).to_have_url('blog/Comunidade%20e%20Tecnologia')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Comunidade e Tecnologia")

def test_check_diarios_clima_page(blog_page: BlogPage):
  blog_page.click_on_diario_clima_button()
  expect(blog_page.page).to_have_url('blog/Di%C3%A1rio%20do%20Clima')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Diário do Clima")

def test_check_tecnologia_educacao_page(blog_page: BlogPage):
  blog_page.click_on_tecnologia_educacao_button()
  expect(blog_page.page).to_have_url('blog/Tecnologias%20na%20Educa%C3%A7%C3%A3o')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Tecnologias na Educação")

