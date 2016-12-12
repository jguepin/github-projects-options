window.ghOptionsFilters = (() => {
  let selectedAssignees = [];
  let selectedLabels = [];

  const filters = {
    assignees: {
      selector: 'img.avatar',
      name: e => e.alt.substring(1).replace('@', ''),
      prop: e => e.src
    },
    labels: {
      selector: '.issue-card-label',
      name: e => e.innerText,
      prop: e => e.style.cssText,
    }
  };

  const selected = {
    assignees: [],
    labels: []
  };

  const addButtons = () => {
    const $header = $('.project-header > .d-table.mt-1.float-right.f6');

    Object.keys(filters).forEach(type => {
      const template = Handlebars.templates[`${type}-filter`]();

      $header.prepend(template);

      $(`#gh-projects-options-${type}-button`).on('click', { type }, updateList);
    });
  };

  const updateList = (event, type) => {
    type = type || event.data.type;
    const $list = $(`#gh-projects-options-${type}-list`);
    const elements = getList(type);
    const template = Handlebars.templates[`${type}-list`];

    $list.html(template({ elements }));

    $(`.gh-projects-options-${type}-toggle`).on('click', { type }, toggle);
  };

  const getList = type => {
    const elements = {};
    const $elements = $(`.project-columns ${filters[type].selector}`);

    $elements.each((index, element) => {
      const name = filters[type].name(element);
      const prop = filters[type].prop(element);
      const isSelected = selected[type].includes(name);

      if (elements[name]) {
        elements[name].count += 1;
      } else {
        elements[name] = { name, prop, isSelected, count: 1 };
      }
    });

    // Add the fake "empty" element
    const emptyElement = '#empty';

    elements[emptyElement] = {
      name: emptyElement,
      isSelected: selected[type].includes(emptyElement),
      isEmptyElement: true
    }

    return Object.keys(elements).map(x => elements[x]).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
  };

  const toggle = event => {
    const type = event.data.type;
    const $target = $(event.target);
    const $parent = $target.parents('a.select-menu-item');
    const $cards = $('.issue-card');
    const element = $parent.length ? $parent.attr('id') : $target.attr('id');
    const index = selected[type].indexOf(element);

    if (index === -1) {
      selected[type].push(element);
    } else {
      selected[type].splice(index, 1);
    }

    $cards.each((index, card) => {
      const $card = $(card);

      if (!selected[type].length) {
        $card.show();
      } else {
        const $selector = $(card).find(filters[type].selector);

        // TODO: handle multiple assignees, authors, labels…
        let firstElement = $selector.length ? filters[type].name($selector[0]) : '#empty';

        if (selected[type].includes(firstElement)) {
          $card.show();
        } else {
          $card.hide();
        }
      }
    });

    updateList(null, type);
    event.stopPropagation();
  };

  const setup = () => {
    addButtons();
  };

  return {
    setup
  };
})();

