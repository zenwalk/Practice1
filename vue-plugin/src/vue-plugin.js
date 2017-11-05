/**
  * vue-plugin
  * (c) 2017 
  * @license MIT
  */

import Foo from './Foo'

const vuePlugin = {}

/**
 * Plugin API
 */
vuePlugin.install = function (Vue, options) {

  console.log('plugin entry');

  Vue.component('Foo', Foo);

  // Add global method or property
  Vue.myGlobalMethod = function () {
   // something logic ...
  }

  // Add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
     // something logic ...
    }
  })

  // Inject some component options
  Vue.mixin({
    created: function (e) {
     // something logic ...
     console.log('created mixin', e);
    }
  })

  // Add an instance method
  Vue.prototype.$myMethod = function (options) {
   // something logic ...
  }

}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vuePlugin)
}

export default vuePlugin
