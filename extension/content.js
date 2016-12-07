let selectedAssignee = '';

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
  $('#gh-projects-options-assignees-button').on('click', updateAssigneesList);
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

function addAssigneesFilter() {
  const headerButtons = $('div.project-header > div.d-table.mt-1.float-right.f6');

  headerButtons.prepend(Handlebars.templates['assignees-filter']());
}

function updateAssigneesList() {
  const assigneesList = $('#gh-projects-options-assignees-list');
  const assignees = getAssigneesList();
  const template = Handlebars.templates['assignees-list'];

  assigneesList.html(template({ assignees }));
  $('.gh-projects-options-assignees-toggle').on('click', toggleAssignee);
}

function toggleAssignee(e) {
  const assignee = e ? $(e.currentTarget).find('.select-menu-item-text').text().trim() : '';
  const cards = $('.issue-card');

  if (selectedAssignee === assignee) {
    selectedAssignee = '';
  } else if (selectedAssignee !== assignee) {
    selectedAssignee = assignee
  }

  cards.each((index, card) => {
    if (!selectedAssignee) {
      $(card).show();
    } else {
      const cardAssignees = $(card).find('img.avatar');

      if (cardAssignees.length && cardAssignees[0].alt === `@${assignee}`) {
        $(card).show();
      } else {
        $(card).hide();
      }
    }
  });
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

function getLabelsList() {
  const labels = {};
  const labelEls = $('.issue-card-label');
  labelEls.each((index, label) => {
    labels[label.innerText] = label.style.cssText;
  });

  return labels;
}

function getAssigneesList() {
  const assignees = {};
  const assigneesEls = $('.project-columns img.avatar');

  assigneesEls.each((index, assignee) => {
    const username = assignee.alt.substring(1);
    const avatar = assignee.src;
    const isSelected = selectedAssignee === username;

    if (assignees[username]) {
      assignees[username].count += 1;
    } else {
      assignees[username] = { avatar, username, isSelected, count: 1 };
    }
  });

  return Object.keys(assignees).map(x => assignees[x]).sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase());
}

function openPane() {
  // Hide repositories
  const repositories = Array.from(getRepositoriesList());

  $('#gh-projects-options-repolist').html(Handlebars.templates['repositories-checkboxes']({ repositories }));
  $('.gh-projects-options-toggle-repo').on('click', toggleRepositoryEvent);

  // Hide labels
  const labels = getLabelsList();

  $('#gh-projects-options-labelist').html(Handlebars.templates['labels-checkboxes']({ labels }));
  $('.gh-projects-options-toggle-label').on('click', toggleLabelEvent);
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

function toggleLabelEvent(e) {
  const label = e.target.id;
  const checked = e.target.checked;

  const cards = $('.issue-card');
  cards.each((index, card) => {
    const cardLabels = $(card).find('.issue-card-label');
    if (cardLabels.length && cardLabels[0].innerText === label) {
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
  addAssigneesFilter();
  addProjectsOptionsPane();
  addButtonsEventListeners();
});
