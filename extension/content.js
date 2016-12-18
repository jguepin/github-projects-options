/* globals ghOptionsFilters, ghOptionsModal */

function addHeaderOptionsIcon() {
  const headerButtons = $('div.project-header > div.d-table.mt-1.float-right.f6');
  headerButtons.prepend(Handlebars.templates['header-options-icon']());
}

function addProjectsOptionsPane() {
  const panes = $('div.project-pane');
  const panesParent = panes.parent();
  const isFullscreen = window.location.search.match(/fullscreen=true/);

  panesParent.append(Handlebars.templates['projects-options-pane']({ isFullscreen }));
}

function addButtonsEventListeners() {
  $('button.gh-projects-options-toggle').on('click', toggleProjectOptionsPane);
  $('#gh-projects-options-add-column-toggle').on('click', toggleAddColumnEvent);
  $('#gh-projects-options-project-details-toggle').on('click', toggleProjectDetailsEvent);
  $('#gh-projects-options-project-settings-toggle').on('click', toggleProjectSettingsEvent);
}

function toggleProjectOptionsPane() {
  const pane = $('div.project-pane.gh-projects-options-pane');
  if (pane.hasClass('d-none')) {
    pane.removeClass('d-none');

    openPane();
  } else {
    pane.addClass('d-none');
  }
}

function getRepositoriesList() {
  const repositories = new Set();
  const cardsDesc = $('.issue-card').find('small');

  cardsDesc.each((index, cardDesc) => {
    const cardText = cardDesc.innerText.trim();
    const matchRepo = cardText.match(/.*\/(.*)#\d+ .*/);
    if (matchRepo && matchRepo.length > 1) {
      repositories.add(matchRepo[1]);
    }
  });

  return repositories;
}

function openPane() {
  // Hide repositories
  const repositories = Array.from(getRepositoriesList());

  $('#gh-projects-options-repolist').html(Handlebars.templates['repositories-checkboxes']({ repositories }));
  $('.gh-projects-options-toggle-repo').on('click', toggleRepositoryEvent);
}

function toggleRepositoryEvent(e) {
  const repo = e.target.id;
  const checked = e.target.checked;

  const repoPattern = `.*\\/${repo}#\\d+ .*`;
  const cards = $('.issue-card');
  cards.each((index, card) => {
    const cardDesc = $(card).find('small')[0];
    if (cardDesc.innerText.match(repoPattern)) {
      if (checked) {
        $(card).hide();
      } else {
        $(card).show();
      }
    }
  });
}

function toggleAddColumnEvent(e) {
  const checked = e.target.checked;

  const addColumnEl = $('.js-new-project-column-container');
  if (checked) {
    $(addColumnEl).hide();
  } else {
    $(addColumnEl).show();
  }
}

function toggleProjectDetailsEvent(e) {
  const checked = e.target.checked;

  const projectDetailsEl = $('.js-toggle-project-about').parent();
  if (checked) {
    $(projectDetailsEl).removeClass('d-table-cell').hide();
  } else {
    $(projectDetailsEl).addClass('d-table-cell').show();
  }
}

function toggleProjectSettingsEvent(e) {
  const checked = e.target.checked;

  const settingsEl = $('div.project-header > div.d-table.mt-1.float-right.f6').children().last();
  if (checked) {
    $(settingsEl).removeClass('d-table-cell').hide();
  } else {
    $(settingsEl).addClass('d-table-cell').show();
  }
}

$(document).ready(() => {
  addHeaderOptionsIcon();
  addProjectsOptionsPane();
  addButtonsEventListeners();
  ghOptionsFilters.setup();
  ghOptionsModal.setup();
});
