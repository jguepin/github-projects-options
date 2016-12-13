window.ghOptionsFilters = (() => {
  const filters = {
    assignees: {
      selector: 'img.avatar',
      name: assignee => assignee.alt.substring(1).replace('@', ''),
      prop: assignee => assignee.src
    },
    labels: {
      selector: '.issue-card-label',
      name: label => label.innerText,
      prop: label => label.style.cssText,
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

  const getList = (type) => {
    const $elements = $(`.project-columns ${filters[type].selector}`);

    const elements = $elements.reduce((acc, element) => {
      const name = filters[type].name(element);
      const prop = filters[type].prop(element);
      const isSelected = selected[type].includes(name);

      if (acc[name]) {
        acc[name].count += 1;
      } else {
        acc[name] = { name, prop, isSelected, count: 1 };
      }

      return acc;
    }, {});

    // Add the fake "empty" element
    const emptyElement = '#empty';

    elements[emptyElement] = {
      name: emptyElement,
      isSelected: selected[type].includes(emptyElement),
      isEmptyElement: true
    };

    return Object.keys(elements).map(x => elements[x]).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
  };

  const toggle = (event) => {
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

    $cards.each((index, card) => $(card).toggle(shouldShowCard(card)));

    updateList(null, type);
    event.stopPropagation();
  };

  const shouldShowCard = (card) => {
    // A card is shown if it matches all the selected filters
    return Object.keys(selected).reduce((shouldShow, type) => {
      // If no filter is selected, it should be shown
      if (!selected[type].length) {
        return shouldShow && true;
      }
      
      const $selector = $(card).find(filters[type].selector);

      // TODO: handle multiple assignees, authors, labels…
      let firstElement = $selector.length ? filters[type].name($selector[0]) : '#empty';

      return shouldShow && selected[type].includes(firstElement);
    }, true);
  };

  const setup = () => {
    addButtons();
  };

  return {
    setup
  };
})();
