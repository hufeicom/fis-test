import App from "app.vue";
// const Vue = require('vue');
import Vue from "vue/dist/vue.common.dev";


new Vue({
    'el': '#app',
    template:'<div>Hello <App></App></div>',
    components: {
        App
    }
})