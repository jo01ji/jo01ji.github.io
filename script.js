// Light/dark theme toggle for the current page view
document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    root.setAttribute('data-theme', root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
});

// Five quick taps on the footer copyright open the (password-protected) logbook
(function () {
  var span = document.querySelector('.site-footer .wrap span');
  if (!span) return;
  var taps = [];
  span.addEventListener('click', function () {
    var now = Date.now();
    taps = taps.filter(function (t) { return now - t < 3000; }).concat(now);
    if (taps.length >= 5) location.href = 'logbook.html';
  });
})();
