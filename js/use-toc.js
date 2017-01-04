function initToc(obj) {
  obj.toc({
    showSpeed: 0,
    listType: 'ul',
    minimumHeaders: 2,
    noBackToTopLinks: true,
    title: '',
    headers: '#content h2, #content h3',
    classes: {
      'list': 'nav',
      'item': 'navli'
    }
  });
}
