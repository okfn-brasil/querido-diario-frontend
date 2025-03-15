import pytest
from playwright.sync_api import expect

from e2e.playwright.pytest.pages.page_blog import BlogPage



@pytest.fixture(scope="function")
def blog_page(browser_context) -> BlogPage:
  blogpage = BlogPage(browser_context)
  blogpage.page.goto("/blog")
#  blogpage.wait_main_fields()

  return blogpage

@pytest.fixture(scope="function", autouse=True)
def before_after_each():
  pass

@pytest.mark.pagina_blog
def test_clicar_no_link_historia(blog_page: BlogPage):

  # Gatilho que verifica se uma nova página/aba foi aberta
  blog_page.click_on_historia_button()

  # Verifica a URL da nova aba aberta
  expect(blog_page.page).to_have_url('blog/Hist%C3%B3ria')

def test_check_historia_page(blog_page: BlogPage):
  blog_page.click_on_historia_button()
  expect(blog_page.page).to_have_url('blog/Hist%C3%B3ria')

  posts = blog_page.get_historia_page()
  for i in posts:
    category = i.locator(blog_page.category_historia_post)
    expect(category).to_have_text("História")

