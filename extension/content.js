/* globals ghOptionsFilters, ghOptionsModal */

function addProjectsOptionsPane() {
  const paneMenu = $('div.project-pane-menu');
  paneMenu.append(Handlebars.templates['projects-options-pane']());
}

function addButtonsEventListeners() {
  $('#gh-projects-options-add-column-toggle').on('click', toggleAddColumnEvent);
  $('#gh-projects-options-project-details-toggle').on('click', toggleProjectDetailsEvent);
  $('#gh-projects-options-project-settings-toggle').on('click', toggleProjectSettingsEvent);
  $('#gh-projects-options-project-modals-toggle').on('click', toggleProjectModalsEvent);
}

function toggleAddColumnEvent(e) {
  const checked = e.target.checked;

  const addColumnEl = $('.js-new-project-column-container');
  $(addColumnEl).toggle(!checked);
}

function toggleProjectDetailsEvent(e) {
  const checked = e.target.checked;

  const projectDetailsEl = $('.js-toggle-project-about').parent();
  $(projectDetailsEl).toggle(!checked);
  $(projectDetailsEl).toggleClass('d-table-cell', !checked);
}

function toggleProjectSettingsEvent(e) {
  const checked = e.target.checked;

  const settingsEl = $('div.project-header > div.d-table.mt-1.float-right.f6').children().last();
  $(settingsEl).toggle(!checked);
  $(settingsEl).toggleClass('d-table-cell', !checked);
}

function toggleProjectModalsEvent(e) {
  const checked = e.target.checked;

  if (checked) {
    ghOptionsModal.setup();
  } else {
    ghOptionsModal.destroy();
  }
}

$(document).ready(() => {
  addProjectsOptionsPane();
  addButtonsEventListeners();
  ghOptionsFilters.setup();
});
