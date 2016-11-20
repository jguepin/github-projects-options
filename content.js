function addHeaderOptionsIcon() {
  const headerButtons = $('div.project-header > div.d-table.mt-1.float-right.f6');
  headerButtons.prepend(`
    <div class="d-table-cell pr-4">
      <button class="btn-link muted-link v-align-middle jgh-projects-options-toggle" type="button" aria-haspop="true">
        <svg class="octicon octicon-tools" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"></path></svg>
        Options
      </button>
    </div>
  `);
}

function addProjectsOptionsPane() {
  const panes = $('div.project-pane');
  const panesParent = panes.parent();
  const isFullscreen = window.location.search.match(/fullscreen=true/);

  panesParent.append(`
    <div class="project-pane jgh-projects-options-pane border-left border-bottom position-absolute bottom-0 bg-gray-light overflow-auto d-none ${isFullscreen ? "top-0" : ""}">
      <div class="py-2 border-bottom bg-gray">
        <button class="btn-link position-absolute top-0 right-0 mt-2 mr-3 link-gray jgh-projects-options-toggle" aria-label="Hide project options" type="button">
          <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        </button>
        <h4 class="f5 text-center">Project options</h4>
      </div>
      <div class="mx-4 my-4 pb-4 overflow-hidden">
        <h4 class="pb-2">Hide repositories</h4>
        <ul class="contains-task-list" id="jgh-projects-options-repolist"></ul>

        <h4 class="py-2">Hide labels</h4>
        <ul class="contains-task-list" id="jgh-projects-options-labelist"></ul>

        <h4 class="py-2">Hide by assignee</h4>
        <ul class="contains-task-list" id="jgh-projects-options-assigneelist"></ul>
      </div>
    </div>
  `);
}

function addButtonsEventListeners() {
  $('button.jgh-projects-options-toggle').on('click', toggleProjectOptionsPane);
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
  const assigneesEls = $('img.avatar');
  assigneesEls.each((index, assignee) => {
    assignees[assignee.alt.substring(1)] = assignee.src;
  });

  return assignees;
}

function openPane() {
  // Hide repositories
  const repositories = getRepositoriesList();
  let repositoriesCheckboxes = '';
  repositories.forEach((repo) => {
    repositoriesCheckboxes += `
      <li>
        <label class="text-normal">
          <input type="checkbox" id="${repo}" class="jgh-projects-options-toggle-repo"> ${repo}
        </label>
      </li>
    `;
  });
  $('#jgh-projects-options-repolist').html(repositoriesCheckboxes);
  $('.jgh-projects-options-toggle-repo').on('click', toggleRepositoryEvent);

  // Hide labels
  const labels = getLabelsList();
  let labelsCheckboxes = '';
  $.each(labels, (label, style) => {
    labelsCheckboxes += `
      <li>
        <label>
          <input type="checkbox" id="${label}" class="jgh-projects-options-toggle-label">
          <span style="${style}" class="label">${label}</span>
        </label>
      </li>
    `;
  });
  $('#jgh-projects-options-labelist').html(labelsCheckboxes);
  $('.jgh-projects-options-toggle-label').on('click', toggleLabelEvent);

  const assignees = getAssigneesList();
  let assigneesCheckboxes = '';
  $.each(assignees, (assignee, url) => {
    assigneesCheckboxes += `
      <li>
        <label class="text-normal">
          <input type="checkbox" id="${assignee}" class="jgh-projects-options-toggle-assignee">
          <img src="${url}" class="avatar" height="20" width="20" alt="@${assignee}">
          <span class="pl-1">${assignee}</span>
        </label>
      </li>
    `;
  });
  $('#jgh-projects-options-assigneelist').html(assigneesCheckboxes);
  $('.jgh-projects-options-toggle-assignee').on('click', toggleAssigneeEvent);
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

function toggleAssigneeEvent(e) {
  const assignee = e.target.id;
  const checked = e.target.checked;

  const cards = $('.issue-card');
  cards.each((index, card) => {
    const cardAssignees = $(card).find('img.avatar');
    if (cardAssignees.length && cardAssignees[0].alt === `@${assignee}`) {
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
  addProjectsOptionsPane();
  addButtonsEventListeners();
});
