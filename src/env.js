(function (window) {
  window.__env = window.__env || {};

  // Override the default value to make sure it was loaded.
  window.__env.envFileLoaded = true;

  // Max size of Querido Diário API results (THEMED_EXCERPT_FRAGMENT_SIZE)
  window.__env.qdApiSearchResultMaxSize = 10000;
}(this));
