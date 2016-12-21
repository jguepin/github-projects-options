window.ghOptionsFilters = (() => {
  const filters = {
    assignees: {
      elementSelector: '.issue-card',
      nameSelector: 'img.avatar',
      nameTransform: assignee => assignee.alt.substring(1).replace('@', ''),
      prop: assignee => assignee.src,
      sort: true,
      emptyElement: true
    },
    labels: {
      elementSelector: '.issue-card',
      nameSelector: '.issue-card-label',
      nameTransform: label => label.innerText,
      prop: label => label.style.cssText,
      sort: true,
      emptyElement: true
    },
    columns: {
      elementSelector: '.project-column',
      nameSelector: '.js-project-column-name',
      nameTransform: label => label.innerText,
      toggleClass: 'd-flex',
      sort: false,
      emptyElement: false
    }
  };

  const selected = {
    assignees: [],
    labels: [],
    columns: []
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
    const $elements = $(`.project-columns ${filters[type].nameSelector}`);

    const elements = $elements.reduce((acc, element) => {
      const name = filters[type].nameTransform(element);
      const prop = filters[type].prop ? filters[type].prop(element) : null;
      const isSelected = selected[type].includes(name);

      if (acc[name]) {
        acc[name].count += 1;
      } else {
        acc[name] = { name, prop, isSelected, count: 1 };
      }

      return acc;
    }, {});

    if (filters[type].emptyElement) {
      // Add the fake "empty" element
      const emptyElement = '#empty';

      elements[emptyElement] = {
        name: emptyElement,
        isSelected: selected[type].includes(emptyElement),
        isEmptyElement: true
      };
    }

    let elementsList = Object.values(elements);
    if (filters[type].sort) {
      elementsList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
    }
    return elementsList;
  };

  const toggle = (event) => {
    const type = event.data.type;
    const $target = $(event.target);
    const $parent = $target.parents('a.select-menu-item');
    const element = $parent.length ? $parent.attr('id') : $target.attr('id');
    const index = selected[type].indexOf(element);

    if (index === -1) {
      selected[type].push(element);
    } else {
      selected[type].splice(index, 1);
    }

    const $filteredElements = $(filters[type].elementSelector);
    if (filters[type].elementSelector === '.issue-card') {
      $filteredElements.each((index, card) => filterCard(card));
    } else {
      $filteredElements.each((index, el) => filterElement(el, type));
    }

    updateList(null, type);
    event.stopPropagation();
  };

  const filterCard = (card) => {
    // A card is shown if it matches all the selected filters
    const shouldShow = Object.keys(selected).reduce((shouldShow, type) => {
      // If type is not about cards, ignore
      if (filters[type].elementSelector !== '.issue-card') {
        return shouldShow;
      }
      // If no filter is selected, it should be shown
      if (!selected[type].length) {
        return shouldShow && true;
      }

      const $selector = $(card).find(filters[type].nameSelector);
      let cardNames = [];
      if (!$selector.length) {
        cardNames.push('#empty');
      } else {
        $selector.each((index, el) => cardNames.push(filters[type].nameTransform(el)));
      }

      return shouldShow && !!selected[type].find(selectedName => cardNames.includes(selectedName));
    }, true);

    $(card).toggle(shouldShow);
  };

  const filterElement = (element, type) => {
    let filter = filters[type];
    let shouldShow;
    if (!selected[type].length) {
      shouldShow = true;
    } else {
      const elementNameSelector = $(element).find(filter.nameSelector)[0];
      const elementName = filter.nameTransform(elementNameSelector);

      shouldShow = selected[type].includes(elementName);
    }

    $(element).toggle(shouldShow);
    if (filter.toggleClass) {
      $(element).toggleClass(filter.toggleClass, shouldShow);
    }
  };

  return {
    setup: addButtons
  };
})();
