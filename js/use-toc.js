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
function initTocAffix(my_ul) {
  my_ul.addClass('sidenav');
  my_ul.attr('data-spy', 'affix');
  my_ul.attr('data-offset-top', '30');
}
