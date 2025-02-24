
import pytest
import logging
from playwright.sync_api import sync_playwright

@pytest.fixture(scope="session")
def browser_context_args(base_url):
    """Set browser context arguments, including base URL."""
    return {
        "viewport": {"width":  1366, "height": 768},
        "base_url": base_url
    }

@pytest.fixture(scope="function")
def browser_context(browser_context_args):
    """Create and return a browser context."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(**browser_context_args)
        yield context
        browser.close()
