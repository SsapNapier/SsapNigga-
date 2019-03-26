var Vue = require('vue')
var hello = require('./components/HeaderBar.vue')

new Vue({
   el: "body",
   render: h => h(hello)
});﻿
