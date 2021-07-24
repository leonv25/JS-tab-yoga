// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let scalc = require('./parts/calc'),
        form = require('./parts/form'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');

    scalc();
    form();
    modal();
    slider();
    tabs();
    timer();

});










