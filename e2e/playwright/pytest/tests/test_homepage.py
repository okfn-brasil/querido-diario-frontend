

class TestHomePage:

  def before_after_each(self):
    pass

  def test_open_homepage(self, page):
      page.goto("/ ")
