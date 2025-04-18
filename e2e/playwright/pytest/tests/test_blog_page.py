import pytest
import logging
from playwright.sync_api  import expect
from  pages.page_blog     import BlogPage
from  util.constants      import Constants as c

"""
Este arquivo executa testes E2E
Testes são executados na Página -> https://queridodiario.ok.org.br/blog

"""
@pytest.fixture(scope="function")
def blog_page(browser_context) -> BlogPage:
  blogpage = BlogPage(browser_context)
  blogpage.page.goto("/blog")

  return blogpage

@pytest.fixture(scope="function", autouse=True)
def before_after_each(request):
  test_case_name = request.node.name
  logging.info(c.TEXT_SETUP_SCENARIO)

  yield
  logging.info(c.TEXT_TEARDOWN_SCENARIO)

@pytest.mark.pagina_blog
def test_clicar_no_link_historia(blog_page: BlogPage):
  """
         Cenário de teste:
            Clicar no link 'História' e verificar a URL é alterada corretamente
    """

  # Gatilho que verifica se uma nova página/aba foi aberta
  blog_page.click_on_historia_button()

  # Verifica a URL da nova aba aberta
  expect(blog_page.page).to_have_url('blog/Hist%C3%B3ria')

@pytest.mark.pagina_blog
def test_check_historia_page(blog_page: BlogPage):
  """
          Cenário de teste:
             Clicar no link 'História' e verificar a URL é alterada corretamente e se todos os posts são da categoria História
  """
  blog_page.click_on_queri_diario_nas_unis_button()
  expect(blog_page.page).to_have_url('blog/Querido%20Di%C3%A1rio%20nas%20Universidades')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Querido Diário nas Universidades")

@pytest.mark.pagina_blog
def test_check_casos_de_uso_page(blog_page: BlogPage):
  """
          Cenário de teste:
             Clicar no link 'Casos de Uso' e verificar a URL é alterada corretamente e se todos os posts são da categoria Casos de Uso
     """
  blog_page.click_on_casos_de_uso_button()
  expect(blog_page.page).to_have_url('blog/Casos%20de%20Uso')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Casos de Uso")

@pytest.mark.pagina_blog
def test_check_comunidade_tecnologia_page(blog_page: BlogPage):
  """
            Cenário de teste:
               Clicar no link 'Comunidade e Tecnologia' e verificar a URL é alterada corretamente e se todos os posts são da categoria Comunidade e Tecnologia
       """
  blog_page.click_on_comunidade_tecnologia_button()
  expect(blog_page.page).to_have_url('blog/Comunidade%20e%20Tecnologia')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Comunidade e Tecnologia")

def test_check_diarios_clima_page(blog_page: BlogPage):
  """
            Cenári  o de teste:
               Clicar no link 'Diário do Clima' e verificar a URL é alterada corretamente e se todos os posts são da categoria Diário do Clima
       """
  blog_page.click_on_diario_clima_button()
  expect(blog_page.page).to_have_url('blog/Di%C3%A1rio%20do%20Clima')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Diário do Clima")

def test_check_tecnologia_educacao_page(blog_page: BlogPage):
  """
            Cenário de teste:
               Clicar no link 'Tecnologias na Educação' e verificar a URL é alterada corretamente e se todos os posts são da categoria Tecnologias na Educação
       """
  blog_page.click_on_tecnologia_educacao_button()
  expect(blog_page.page).to_have_url('blog/Tecnologias%20na%20Educa%C3%A7%C3%A3o')

  posts = blog_page.get_post_titles()
  for i in posts:
    category = i.locator(blog_page.category_post)
    expect(category).to_have_text("Tecnologias na Educação")

