// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';
import jQuery from 'jquery';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

window.$ = window.jQuery = jQuery;


// Utility imports
import bxPanelFix from './util/bx-panel-fix';
import * as FocusUtility from './util/focus';
import * as LazyLoader from './util/lazy-loader';



// Block imports
// TODO: add code here
import * as header from '../blocks/header/index.js';
import * as connectus from '../blocks/connectus/index.js';
import * as info1 from '../blocks/info1/index.js';
import * as productfst from '../blocks/productfst/productfst.js';
import * as popular from '../blocks/popular/popular.js';
import * as order from '../blocks/order/order.js';
import * as gallery from '../blocks/gallery/gallery.js';
import * as review from '../blocks/review/review.js';
import * as slider from '../blocks/slider/slider.js';
import * as footer from '../blocks/footer/footer.js';




// Initialize libraries
svg4everybody();
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, $ );
// now you can use $().masonry()

  





// Initialize utilities
FocusUtility.init();
LazyLoader.init();
header.initBlock();
connectus.initBlock();
info1.initBlock();
productfst.initBlock();
popular.initBlock();
order.initBlock();
gallery.initBlock();
review.initBlock();
slider.initBlock();
footer.initBlock();


// bxPanelFix((panel, isFixed) => {
//     void(panel);
//     void(isFixed);
// });
