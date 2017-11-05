define(
  ["require", "jquery", "app/myTree", "app/eventBus", "vue", "vue-qriously", "app/Comp", "at-ui"],
  function(require, $, Tree, bus, Vue, VueQriously, Comp, AtUi) {
    "use strict";
    console.log("main");
    bus.on("tree-click", function(data) {
      console.log(data);
    });
    Tree.run();

    console.log(Vue.version);

    Vue.component("comp", Comp);
    Vue.use(VueQriously);

    Vue.use(AtUi.default);

    new Vue({
      el: "#app",
      template: '<div><comp></comp><qriously value="Hello World!" :size="200" /><at-button type="primary">Primary Button</at-button></div>'
      // template: '<h1>world</h1>'
    });
  }
);
