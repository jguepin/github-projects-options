let selectedAssignees = [];
let selectedLabels = [];

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
  $('#gh-projects-options-labels-button').on('click', updateLabelsList);
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
  $('.gh-projects-options-assignees-toggle').on('click', toggleAssigneeEvent);
}

function toggleAssigneeEvent(e) {
  const parent = $(e.target).parents('a.select-menu-item');
  const assignee = parent.length ? parent.attr('id') : $(e.target).attr('id');
  const cards = $('.issue-card');
  const index = selectedAssignees.indexOf(assignee);

  if (index === -1) {
    selectedAssignees.push(assignee);
  } else {
    selectedAssignees.splice(index, 1);
  }

  cards.each((index, card) => {
    if (!selectedAssignees.length) {
      $(card).show();
    } else {
      const cardAssignees = $(card).find('img.avatar');
      let firstAssignee = cardAssignees.length ? cardAssignees[0].alt.replace('@', '') : '#nobody';

      if (selectedAssignees.includes(firstAssignee)) {
        $(card).show();
      } else {
        $(card).hide();
      }
    }
  });

  updateAssigneesList();
  e.stopPropagation();
}

function addLabelsFilter() {
  const headerButtons = $('div.project-header > div.d-table.mt-1.float-right.f6');

  headerButtons.prepend(Handlebars.templates['labels-filter']());
}

function updateLabelsList() {
  const labelsList = $('#gh-projects-options-labels-list');
  const labels = getLabelsList();
  const template = Handlebars.templates['labels-list'];

  labelsList.html(template({ labels }));
  $('.gh-projects-options-labels-toggle').on('click', toggleLabelEvent);
}

function toggleLabelEvent(e) {
  const parent = $(e.target).parents('a.select-menu-item');
  const label = parent.length ? parent.attr('id') : $(e.target).attr('id');
  const cards = $('.issue-card');
  const index = selectedLabels.indexOf(label);

  if (index === -1) {
    selectedLabels.push(label);
  } else {
    selectedLabels.splice(index, 1);
  }

  cards.each((index, card) => {
    if (!selectedLabels.length) {
      $(card).show();
    } else {
      const cardLabels = $(card).find('.issue-card-label');
      let firstLabel = cardLabels.length ? cardLabels[0].innerText : '#unlabeled';

      if (selectedLabels.includes(firstLabel)) {
        $(card).show();
      } else {
        $(card).hide();
      }
    }
  });

  updateLabelsList();
  e.stopPropagation();
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

function getAssigneesList() {
  const assignees = {};
  const assigneesEls = $('.project-columns img.avatar');

  assigneesEls.each((index, assignee) => {
    const username = assignee.alt.substring(1);
    const avatar = assignee.src;
    const isSelected = selectedAssignees.includes(username);

    if (assignees[username]) {
      assignees[username].count += 1;
    } else {
      assignees[username] = { avatar, username, isSelected, count: 1 };
    }
  });

  // Add the fake assignee "nobody"
  const nobodyUsername = '#nobody';
  assignees[nobodyUsername] = {
    username: nobodyUsername,
    isSelected: selectedAssignees.includes(nobodyUsername),
    isNobody: true
  };

  return Object.keys(assignees).map(x => assignees[x]).sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase());
}

function getLabelsList() {
  const labels = [];
  const labelEls = $('.project-columns .issue-card-label');

  labelEls.each((index, label) => {
    const name = label.innerText;
    const style = label.style.cssText;
    const isSelected = selectedLabels.includes(name);

    if (labels[name]) {
      labels[name].count += 1;
    } else {
      labels[name] = { name, style, isSelected, count: 1 };
    }
  });

  // Add the fake label "empty"
  const unlabeledName = '#unlabeled';
  labels[unlabeledName] = {
    name: unlabeledName,
    isSelected: selectedLabels.includes(unlabeledName),
    isUnlabeled: true
  };

  return Object.keys(labels).map(x => labels[x]).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
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
  addAssigneesFilter();
  addLabelsFilter();
  addProjectsOptionsPane();
  addButtonsEventListeners();
});
