/* globals ghOptionsObserver */

window.ghOptionsModal = (() => {
  const setup = () => {
    const observable = 'issue-card';

    ghOptionsObserver.observe(observable, (card) => {
      console.log(card);
    });
  };

  return {
    setup
  };
})();
