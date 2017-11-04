define(
  ["require", "jquery", "app/myTree", "app/eventBus", "vue", "vue-qriously", "app/Comp"],
  function(require, $, Tree, bus, Vue, VueQriously, Comp) {
    "use strict";
    console.log("main");
    bus.on("tree-click", function(data) {
      console.log(data);
    });
    Tree.run();

    console.log(Vue.version);

    Vue.component("comp", Comp);
    Vue.use(VueQriously);

    new Vue({
      el: "#app",
      template: "<div><comp></comp><qriously value='Hello World!' :size='200' /></div>"
      // template: '<h1>world</h1>'
    });
  }
);
