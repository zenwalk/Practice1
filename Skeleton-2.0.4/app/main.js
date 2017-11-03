define(
  ["require", "jquery", "app/myTree", "app/eventBus", "vue", "app/Comp"],
  function(require, $, Tree, bus, Vue, Comp) {
    "use strict";
    console.log("main");
    bus.on("tree-click", function(data) {
      console.log(data);
    });
    Tree.run();

    console.log(Vue.version);

    Vue.component("comp", Comp);

    new Vue({
      el: "#app",
      template: "<div><comp></comp></div>"
      // template: '<h1>world</h1>'
    });
  }
);
