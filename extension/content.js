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
  $('button.jgh-projects-options-toggle').on('click', toggleProjectOptionsPane);
  $('#tgh-projects-assigns-button').on('click', updateAssignsList);
}

function toggleProjectOptionsPane() {
  const pane = $('div.project-pane.jgh-projects-options-pane');
  if (pane.hasClass('d-none')) {
    pane.removeClass('d-none');

    openPane();
  } else {
    pane.addClass('d-none');
  }
}

function addAssignsFilter() {
  const headerButtons = $('div.project-header > div.d-table.mt-1.float-right.f6');

  headerButtons.prepend(Handlebars.templates['assigns-filter']());
}

function updateAssignsList() {
  const assignsList = $('#tgh-projects-assigns-list');
  const assignees = getAssigneesList();
  const template = Handlebars.templates['assigns-list'];

  assignsList.html(template({ assignees }));
  $('.tgh-projects-assigns-toggle').on('click', toggleAssignee);
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
  const assignees = [];
  const assigneesEls = $('img.avatar');

  assigneesEls.each((index, assignee) => {
    const username = assignee.alt.substring(1);
    const avatar = assignee.src;
    const isSelected = selectedAssignee === username;

    assignees.push({ username, avatar, isSelected });
  });

  return _.sortBy(_.uniqBy(assignees, x => x.username), x => x.username.toLowerCase());
}

function openPane() {
  // Hide repositories
  const repositories = Array.from(getRepositoriesList());

  $('#jgh-projects-options-repolist').html(Handlebars.templates['repositories-checkboxes']({ repositories }));
  $('.jgh-projects-options-toggle-repo').on('click', toggleRepositoryEvent);

  // Hide labels
  const labels = getLabelsList();

  $('#jgh-projects-options-labelist').html(Handlebars.templates['labels-checkboxes']({ labels }));
  $('.jgh-projects-options-toggle-label').on('click', toggleLabelEvent);
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

$(document).ready(() => {
  addHeaderOptionsIcon();
  addAssignsFilter();
  addProjectsOptionsPane();
  addButtonsEventListeners();
});
