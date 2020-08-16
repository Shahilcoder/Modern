(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contentBlock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col-lg-4 col-md-6 col-sm-12 p-2\">\r\n    <div class=\"rounded bg-"
    + alias4(((helper = (helper = lookupProperty(helpers,"color") || (depth0 != null ? lookupProperty(depth0,"color") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":36}}}) : helper)))
    + " text-white p-4 animate__animated animate__fadeInUp\">\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"quote") || (depth0 != null ? lookupProperty(depth0,"quote") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quote","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":20}}}) : helper)))
    + "</p>\r\n        <span class=\"author\">\r\n            <i class=\"fa fa-quote-left\" aria-hidden=\"true\" style=\"position: relative; bottom: 10px;\"></i>\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":22}}}) : helper)))
    + "\r\n            <i class=\"fa fa-quote-right\" aria-hidden=\"true\" style=\"position: relative; bottom: 10px;\"></i>\r\n        </span>\r\n    </div>\r\n</div>";
},"useData":true});
})();