from asyncio import timeout

from playwright.sync_api import Page

class BasePage:

  def __init__(self, page: Page):
    self.page = page

