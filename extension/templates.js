(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['assignees-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu js-menu-container js-select-menu\">\n    <button id=\"gh-projects-options-assignees-button\" class=\"btn-link select-menu-button project-header-link js-menu-target no-underline\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"a\" aria-expanded=\"true\">\n      Assignee\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container\" aria-hidden=\"false\" aria-expanded=\"true\" style=\"right: 10px;\">\n\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by who’s assigned</span>\n        </div>\n\n        <div class=\"js-select-menu-deferred-content\">\n          <div class=\"select-menu-filters\"></div>\n\n          <div class=\"select-menu-list\" data-filter=\"assignee\">\n            <div id=\"gh-projects-options-assignees-list\" data-filterable-for=\"assignees-filter-field\" data-filterable-type=\"substring\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['assignees-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "  <a id=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"select-menu-item js-navigation-item js-navigation-open gh-projects-options-assignees-toggle "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">\n      <path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path>\n    </svg>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prop : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"select-menu-item-text\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isEmptyElement : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"select-menu-item-gravatar\"><img alt=\"@"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" height=\"30\" src=\""
    + alias4(((helper = (helper = helpers.prop || (depth0 != null ? depth0.prop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prop","hash":{},"data":data}) : helper)))
    + "\" width=\"30\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <strong>Assigned to nobody</strong>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span style=\"font-size: 10px;\">("
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + ")</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.elements : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['authors-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu js-menu-container js-select-menu\">\n    <button id=\"gh-projects-options-authors-button\" class=\"btn-link select-menu-button project-header-link js-menu-target no-underline\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"h\" aria-expanded=\"true\">\n      Authors\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container\" aria-hidden=\"false\" aria-expanded=\"true\" style=\"right: 10px;\">\n\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by who’s the author</span>\n        </div>\n\n        <div class=\"js-select-menu-deferred-content\">\n          <div class=\"select-menu-filters\"></div>\n\n          <div class=\"select-menu-list\" data-filter=\"author\">\n            <div id=\"gh-projects-options-authors-list\" data-filterable-for=\"authors-filter-field\" data-filterable-type=\"substring\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['authors-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <a id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"select-menu-item js-navigation-item js-navigation-open gh-projects-options-authors-toggle "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">\n      <path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path>\n    </svg>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prop : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"select-menu-item-text\">\n      "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"select-menu-item-gravatar\"><img alt=\"@"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" height=\"30\" src=\""
    + alias4(((helper = (helper = helpers.prop || (depth0 != null ? depth0.prop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prop","hash":{},"data":data}) : helper)))
    + "\" width=\"30\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span style=\"font-size: 10px;\">("
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + ")</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.elements : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['columns-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu label-select-menu js-menu-container js-select-menu\">\n    <button id=\"gh-projects-options-columns-button\" class=\"btn-link select-menu-button project-header-link js-menu-target no-underline\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"c\" aria-expanded=\"false\">\n      Columns\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\" aria-hidden=\"true\" aria-expanded=\"false\" style=\"right: 10px;\">\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by column</span>\n        </div>\n\n      <div class=\"js-select-menu-deferred-content\"></div>\n\n      <div class=\"select-menu-list\">\n        <div id=\"gh-projects-options-columns-list\" data-filterable-for=\"label-filter-field\" data-filterable-type=\"substring\"></div>\n\n        <div class=\"select-menu-no-results\">No column found. Sorry about that.</div>\n      </div>\n    </div>\n    <div class=\"select-menu-loading-overlay anim-pulse\">\n      <svg aria-hidden=\"true\" class=\"octicon octicon-octoface\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"></path></svg>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['columns-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <a id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"select-menu-item js-navigation-item js-navigation-open gh-projects-options-columns-toggle "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">\n      <path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path>\n    </svg>\n    <div class=\"color-label-wrapper css-truncate-target\">\n      <span class=\"color\" style=\""
    + alias4(((helper = (helper = helpers.prop || (depth0 != null ? depth0.prop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prop","hash":{},"data":data}) : helper)))
    + "\">&nbsp;</span>\n      <span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.elements : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['labels-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu label-select-menu js-menu-container js-select-menu\">\n    <button id=\"gh-projects-options-labels-button\" class=\"btn-link select-menu-button project-header-link js-menu-target no-underline\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"l\" aria-expanded=\"false\">\n      Labels\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\" aria-hidden=\"true\" aria-expanded=\"false\" style=\"right: 10px;\">\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by label</span>\n        </div>\n\n      <div class=\"js-select-menu-deferred-content\"></div>\n\n      <div class=\"select-menu-list\">\n        <div id=\"gh-projects-options-labels-list\" data-filterable-for=\"label-filter-field\" data-filterable-type=\"substring\"></div>\n\n        <div class=\"select-menu-no-results\">No labels found. Sorry about that.</div>\n      </div>\n    </div>\n    <div class=\"select-menu-loading-overlay anim-pulse\">\n      <svg aria-hidden=\"true\" class=\"octicon octicon-octoface\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"></path></svg>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['labels-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "  <a id=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"select-menu-item js-navigation-item js-navigation-open gh-projects-options-labels-toggle "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path></svg>\n    <div class=\"select-menu-item-text css-truncate\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isEmptyElement : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <strong>Unlabeled</strong>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"color-label-wrapper css-truncate-target\">\n          <span class=\"color\" style=\""
    + alias4(((helper = (helper = helpers.prop || (depth0 != null ? depth0.prop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prop","hash":{},"data":data}) : helper)))
    + "\">&nbsp;</span>\n          <span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span style=\"font-size: 10px;\">("
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + ")</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.elements : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"gh-projects-options-modal-overlay\">\n  <div id=\"gh-projects-options-modal\"></div>\n</div>\n";
},"useData":true});
templates['projects-options-pane'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pb-3 pr-3 pl-3 f5\">\n  <h3 class=\"f5 mt-0\">Project options</h3>\n  <div class=\"my-3 pb-4 overflow-hidden\">\n    <ul class=\"contains-task-list\">\n      <li>\n        <label class=\"text-normal\">\n          <input type=\"checkbox\" id=\"gh-projects-options-add-column-toggle\"> Hide \"Add column\" column\n        </label>\n      </li>\n      <li>\n        <label class=\"text-normal\">\n          <input type=\"checkbox\" id=\"gh-projects-options-project-details-toggle\"> Hide \"Details\" button\n        </label>\n      </li>\n      <li>\n        <label class=\"text-normal\">\n          <input type=\"checkbox\" id=\"gh-projects-options-project-settings-toggle\"> Hide \"Settings\" icon\n        </label>\n      </li>\n      <li>\n        <label class=\"text-normal\">\n          <input type=\"checkbox\" id=\"gh-projects-options-project-modals-toggle\"> Activate modals (preview)\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});
templates['repositories-filter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"d-table-cell pr-4\" style=\"position: relative;\">\n  <div class=\"select-menu label-select-menu js-menu-container js-select-menu\">\n    <button id=\"gh-projects-options-repositories-button\" class=\"btn-link select-menu-button project-header-link js-menu-target no-underline\" type=\"button\" aria-haspopup=\"true\" data-hotkey=\"r\" aria-expanded=\"false\">\n      Repositories\n    </button>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\" aria-hidden=\"true\" aria-expanded=\"false\" style=\"right: 10px;\">\n      <div class=\"select-menu-modal\">\n        <div class=\"select-menu-header\">\n          <svg aria-label=\"Close\" class=\"octicon octicon-x js-menu-close\" height=\"16\" role=\"img\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\"><path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"></path></svg>\n          <span class=\"select-menu-title\">Filter by repository</span>\n        </div>\n\n      <div class=\"js-select-menu-deferred-content\"></div>\n\n      <div class=\"select-menu-list\">\n        <div id=\"gh-projects-options-repositories-list\" data-filterable-for=\"label-filter-field\" data-filterable-type=\"substring\"></div>\n\n        <div class=\"select-menu-no-results\">No repository found. Sorry about that.</div>\n      </div>\n    </div>\n    <div class=\"select-menu-loading-overlay anim-pulse\">\n      <svg aria-hidden=\"true\" class=\"octicon octicon-octoface\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"></path></svg>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['repositories-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <a id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"select-menu-item js-navigation-item js-navigation-open gh-projects-options-repositories-toggle "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <svg aria-hidden=\"true\" class=\"octicon octicon-check select-menu-item-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">\n      <path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z\"></path>\n    </svg>\n    <div class=\"color-label-wrapper css-truncate-target\">\n      <span class=\"color\" style=\""
    + alias4(((helper = (helper = helpers.prop || (depth0 != null ? depth0.prop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prop","hash":{},"data":data}) : helper)))
    + "\">&nbsp;</span>\n      <span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.elements : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
