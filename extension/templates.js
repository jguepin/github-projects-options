(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['assignees-checkboxes'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li>\n    <label class=\"text-normal\">\n      <input type=\"checkbox\" id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" class=\"jgh-projects-options-toggle-assignee\">\n      <img src=\""
    + alias2(alias1(blockParams[0][0], depth0))
    + "\" class=\"avatar\" height=\"20\" width=\"20\" alt=\"@"
    + alias2(alias1(blockParams[0][1], depth0))
    + "\">\n      <span class=\"pl-1\">"
    + alias2(alias1(blockParams[0][1], depth0))
    + "</span>\n    </label>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.assignees : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
templates['assigns-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu js-menu-container js-select-menu\">\n    <button id=\"tgh-projects-assigns-button\" class=\"btn-link select-menu-button js-menu-target selected\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"a\" aria-expanded=\"true\">\n      Assignee\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container\" aria-hidden=\"false\" aria-expanded=\"true\" style=\"right: 10px;\">\n\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by who’s assigned</span>\n        </div>\n\n        <div class=\"js-select-menu-deferred-content\"><div class=\"select-menu-filters\">\n  </div>\n\n  <div class=\"select-menu-list\" data-filter=\"assignee\">\n    <div id=\"tgh-projects-assigns-list\" data-filterable-for=\"assigns-filter-field\" data-filterable-type=\"substring\">\n    </div>\n\n    <form accept-charset=\"UTF-8\" class=\"select-menu-new-item-form js-issues-custom-filter\" data-name=\"assignee\" method=\"get\"><div style=\"margin:0;padding:0;display:inline\"><input name=\"utf8\" type=\"hidden\" value=\"✓\"></div>\n      <div class=\"select-menu-item js-navigation-item js-new-item-form\">\n        <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path></svg>\n        <div class=\"select-menu-item-text\">\n          <span class=\"select-menu-item-heading\">assignee:<span class=\"js-new-item-name\"></span></span>\n          <span class=\"description\">Filter by this user</span>\n          <input type=\"hidden\" name=\"q\" value=\"is:issue is:open\">\n        </div>\n      </div>\n  </form></div>\n  </div>\n        <div class=\"select-menu-loading-overlay anim-pulse\">\n          <svg aria-hidden=\"true\" class=\"octicon octicon-octoface\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"></path></svg>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['assigns-list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <a class=\"select-menu-item js-navigation-item js-navigation-open tgh-projects-assigns-toggle\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path></svg>\n    <div class=\"select-menu-item-gravatar\"><img alt=\"@"
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" height=\"30\" src=\""
    + alias2(alias1(blockParams[0][0], depth0))
    + "\" width=\"30\"></div>\n    <div class=\"select-menu-item-text\">\n      "
    + alias2(alias1(blockParams[0][1], depth0))
    + "\n    </div>\n  </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<a class=\"select-menu-item js-navigation-item js-navigation-open navigation-focus\">\n  <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path></svg>\n  <div class=\"select-menu-item-text\">\n    <strong>Assigned to nobody</strong>\n  </div>\n</a>\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.assignees : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
templates['header-options-icon'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\">\n  <button class=\"btn-link muted-link v-align-middle jgh-projects-options-toggle\" type=\"button\" aria-haspop=\"true\">\n    <svg class=\"octicon octicon-tools\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z\"></path></svg>\n    Options\n  </button>\n</div>\n";
},"useData":true});
templates['labels-checkboxes'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li>\n    <label>\n      <input type=\"checkbox\" id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" class=\"jgh-projects-options-toggle-label\">\n      <span style=\""
    + alias2(alias1(blockParams[0][0], depth0))
    + "\" class=\"label\">"
    + alias2(alias1(blockParams[0][1], depth0))
    + "</span>\n    </label>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
templates['projects-options-pane'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "top-0";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"project-pane jgh-projects-options-pane border-left border-bottom position-absolute bottom-0 bg-gray-light overflow-auto d-none "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFullscreen : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n  <div class=\"py-2 border-bottom bg-gray\">\n    <button class=\"btn-link position-absolute top-0 right-0 mt-2 mr-3 link-gray jgh-projects-options-toggle\" aria-label=\"Hide project options\" type=\"button\">\n      <svg aria-hidden=\"true\" class=\"octicon octicon-x\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n    </button>\n    <h4 class=\"f5 text-center\">Project options</h4>\n  </div>\n  <div class=\"mx-4 my-4 pb-4 overflow-hidden\">\n    <h4 class=\"pb-2\">Hide repositories</h4>\n    <ul class=\"contains-task-list\" id=\"jgh-projects-options-repolist\"></ul>\n\n    <h4 class=\"py-2\">Hide labels</h4>\n    <ul class=\"contains-task-list\" id=\"jgh-projects-options-labelist\"></ul>\n\n    <h4 class=\"py-2\">Hide by assignee</h4>\n    <ul class=\"contains-task-list\" id=\"jgh-projects-options-assigneelist\"></ul>\n  </div>\n</div>\n";
},"useData":true});
templates['repositories-checkboxes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li>\n    <label class=\"text-normal\">\n      <input type=\"checkbox\" id=\""
    + alias2(alias1(depth0, depth0))
    + "\" class=\"jgh-projects-options-toggle-repo\"> "
    + alias2(alias1(depth0, depth0))
    + "\n    </label>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.repositories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
