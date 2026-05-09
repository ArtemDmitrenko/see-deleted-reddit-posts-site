const CWS_URL = 'https://chromewebstore.google.com/detail/see-deleted-reddit-posts/bhekdnoeenjjgkifhamofpbdcmidjgff';

document.querySelectorAll('#cws-link-top, #cws-link-hero, #cws-link-bottom').forEach((el) => {
  el.setAttribute('href', CWS_URL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});
