/* globals ghOptionsObserver */

window.ghOptionsModal = (() => {
  const spinnerHtml = '<img src=\'https://assets-cdn.github.com/images/spinners/octocat-spinner-64.gif\'>';

  const bind = (card) => {
    const $overlay = $('#gh-projects-options-modal-overlay');
    const $modal = $('#gh-projects-options-modal');

    $(card).find('h5 a').on('click', (event) => {
      if (event.target.href) {
        event.preventDefault();
        $modal.html(spinnerHtml);

        $.get(event.target.href, (data) => {
          $modal.html(data);
        });

        $overlay.show();
      }
    });
  };

  const setup = () => {
    $('body').prepend(Handlebars.templates['modal']());

    const $overlay = $('#gh-projects-options-modal-overlay');
    const modal = '#gh-projects-options-modal';

    $overlay.on('click', (event) => {
      const $target = $(event.target);

      if ($target.closest(modal).length) {
        return true;
      } else {
        $overlay.hide();
      }
    });

    $(document).on('keyup', (event) => {
      if (event.keyCode === 27) {
        $overlay.hide();
      }
    });

    ghOptionsObserver.observe('issue-card', bind);

    $('.issue-card').forEach(bind);
  };

  const destroy = () => {
    window.location.reload();
  };

  return {
    setup,
    destroy
  };
})();
