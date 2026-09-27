// Light/dark theme toggle for the current page view
document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    root.setAttribute('data-theme', root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
});
