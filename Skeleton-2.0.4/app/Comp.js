define(["require", "vue", "dojo/text!./comp.html", "dojo/text"], function(
  require,
  Vue,
  CompTpl,
  text
) {
  "use strict";
  console.log(Vue.version);

  var html = require(["dojo/text!./comp.html"]);

console.log(html);

  return {
    data: function() {
      return {
        message: "hello"
      };
    },
    methods: {
      foo: function(e) {
        this.message = "world";
      }
    },
    template: CompTpl
  };
});
