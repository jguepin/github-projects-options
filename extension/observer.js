window.ghOptionsObserver = (() => {
  this.observable = '';
  this.callback = () => {};

  const options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  };

  const mutationHandler = (mutations) => {
    const observables = [];

    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.className && node.className.includes(this.observable)) {
            observables.push(node);
          }
        });
      }
    });

    if (observables.length) {
      this.callback(observables);
    }
  };

  const observer = new window.MutationObserver(mutationHandler);

  const observe = ((observable, callback) => {
    this.observable = observable;
    this.callback = callback;

    observer.observe(window.document, options);
  });

  const disconnect = () => {
    observer.disconnect();
  };

  return {
    observe,
    disconnect
  };
})();
