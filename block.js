function waitForAddedNode(params) {
    new MutationObserver(function(mutations) {
        var el = document.getElementsByClassName(params.clazz);
        console.log(el)
        if (el[0]) {
            this.disconnect();
            params.done(el);
        }
    }).observe(params.parent || document, {
        subtree: !!params.recursive,
        childList: true,
    });
}

waitForAddedNode({
  clazz: 'overlay',
  parent: document.querySelector('.postShowScreen'),
  recursive: false,
  done: function(el) {
    while(el.length > 0) {
      el[0].remove();
    }
    document.documentElement.className = ''
  }
})
