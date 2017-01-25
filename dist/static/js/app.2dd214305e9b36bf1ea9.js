webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// The Vue build version to load with the `import` command
	// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
	
	const setting = __webpack_require__(7);
	const router = __webpack_require__(9);
	var Vue = setting.Vue;
	const App = __webpack_require__(3);
	/* eslint-disable no-new */
	var app = new Vue({
	  el: '#app',
	  router,
	  components: {
	    App
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(1)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	if(typeof __vue_options__.name === "undefined") {
	  __vue_options__.name = "App"
	}__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "w3-content",
	    staticStyle: {
	      "max-width": "2000px",
	      "margin-top": "46px"
	    }
	  }, [_c('div', {
	    staticClass: "w3-content",
	    staticStyle: {
	      "max-width": "1400px"
	    }
	  }, [_c('navbar'), _vm._v(" "), _c('div', {
	    staticClass: "w3-row"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "w3-col l4"
	  }, [_vm._m(1), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('hr'), _vm._v(" "), _c('blog-tag')], 1)]), _c('br')], 1), _vm._v(" "), _vm._m(4)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "w3-col l8 s12"
	  }, [_c('div', {
	    staticClass: "w3-card-4 w3-margin w3-white"
	  }, [_c('img', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/woods.jpg",
	      "alt": "Nature"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "w3-container w3-padding-8"
	  }, [_c('h3', [_c('b', [_vm._v("TITLE HEADING")])]), _vm._v(" "), _c('h5', [_vm._v("Title description, "), _c('span', {
	    staticClass: "w3-opacity"
	  }, [_vm._v("April 7, 2014")])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-container"
	  }, [_c('p', [_vm._v("Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.\n                Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna\n                enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non\n                congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed\n                vitae justo condimentum, porta lectus vitae, ultricies congue gravida\n                diam non fringilla.\n              ")]), _vm._v(" "), _c('div', {
	    staticClass: "w3-row"
	  }, [_c('div', {
	    staticClass: "w3-col m8 s12"
	  }, [_c('p', [_c('button', {
	    staticClass: "w3-btn w3-padding-large w3-white w3-border w3-hover-border-black"
	  }, [_c('b', [_vm._v("READ MORE »")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-col m4 w3-hide-small"
	  }, [_c('p', [_c('span', {
	    staticClass: "w3-padding-large w3-right"
	  }, [_c('b', [_vm._v("Comments  ")]), _vm._v(" "), _c('span', {
	    staticClass: "w3-tag"
	  }, [_vm._v("0")])])])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "w3-card-4 w3-margin w3-white"
	  }, [_c('img', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/bridge.jpg",
	      "alt": "Norway"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "w3-container w3-padding-8"
	  }, [_c('h3', [_c('b', [_vm._v("BLOG ENTRY")])]), _vm._v(" "), _c('h5', [_vm._v("Title description, "), _c('span', {
	    staticClass: "w3-opacity"
	  }, [_vm._v("April 2, 2014")])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-container"
	  }, [_c('p', [_vm._v("Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.\n                Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna\n                enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non\n                congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed\n                vitae justo condimentum, porta lectus vitae, ultricies congue gravida\n                diam non fringilla.\n              ")]), _vm._v(" "), _c('div', {
	    staticClass: "w3-row"
	  }, [_c('div', {
	    staticClass: "w3-col m8 s12"
	  }, [_c('p', [_c('button', {
	    staticClass: "w3-btn w3-padding-large w3-white w3-border w3-hover-border-black"
	  }, [_c('b', [_vm._v("READ MORE »")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-col m4 w3-hide-small"
	  }, [_c('p', [_c('span', {
	    staticClass: "w3-padding-large w3-right"
	  }, [_c('b', [_vm._v("Comments  ")]), _vm._v(" "), _c('span', {
	    staticClass: "w3-badge"
	  }, [_vm._v("2")])])])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-card-4 w3-margin w3-white"
	  }, [_c('img', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/bridge.jpg",
	      "alt": "Norway"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "w3-container w3-padding-8"
	  }, [_c('h3', [_c('b', [_vm._v("BLOG ENTRY")])]), _vm._v(" "), _c('h5', [_vm._v("Title description, "), _c('span', {
	    staticClass: "w3-opacity"
	  }, [_vm._v("April 2, 2014")])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-container"
	  }, [_c('p', [_vm._v("Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.\n                Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna\n                enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non\n                congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed\n                vitae justo condimentum, porta lectus vitae, ultricies congue gravida\n                diam non fringilla.\n              ")]), _vm._v(" "), _c('div', {
	    staticClass: "w3-row"
	  }, [_c('div', {
	    staticClass: "w3-col m8 s12"
	  }, [_c('p', [_c('button', {
	    staticClass: "w3-btn w3-padding-large w3-white w3-border w3-hover-border-black"
	  }, [_c('b', [_vm._v("READ MORE »")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "w3-col m4 w3-hide-small"
	  }, [_c('p', [_c('span', {
	    staticClass: "w3-padding-large w3-right"
	  }, [_c('b', [_vm._v("Comments  ")]), _vm._v(" "), _c('span', {
	    staticClass: "w3-badge"
	  }, [_vm._v("2")])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "w3-card-2 w3-margin w3-margin-top"
	  }, [_c('img', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/avatar_g.jpg"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "w3-container w3-white"
	  }, [_c('h4', [_c('b', [_vm._v("My Name")])]), _vm._v(" "), _c('p', [_vm._v("Just me, myself and I, exploring the universe of uknownment. I have\n                a heart of love and a interest of lorem ipsum and mauris neque quam\n                blog. I want to share my world with you.")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "w3-card-2 w3-margin"
	  }, [_c('div', {
	    staticClass: "w3-container w3-padding"
	  }, [_c('h4', [_vm._v("Popular Posts")])]), _vm._v(" "), _c('ul', {
	    staticClass: "w3-ul w3-hoverable w3-white"
	  }, [_c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/workshop.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Lorem")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Sed mattis nunc")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/gondol.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Ipsum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Praes tinci sed")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/skies.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Dorum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Ultricies congue")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16 w3-hide-medium w3-hide-small"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/rock.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Mingsum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Lorem ipsum dipsum")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "w3-card-2 w3-margin"
	  }, [_c('div', {
	    staticClass: "w3-container w3-padding"
	  }, [_c('h4', [_vm._v("New Posts")])]), _vm._v(" "), _c('ul', {
	    staticClass: "w3-ul w3-hoverable w3-white"
	  }, [_c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/workshop.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Lorem")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Sed mattis nunc")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/gondol.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Ipsum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Praes tinci sed")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/skies.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Dorum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Ultricies congue")])]), _vm._v(" "), _c('li', {
	    staticClass: "w3-padding-16 w3-hide-medium w3-hide-small"
	  }, [_c('img', {
	    staticClass: "w3-left w3-margin-right",
	    staticStyle: {
	      "width": "50px"
	    },
	    attrs: {
	      "src": "http://www.w3schools.com/w3images/rock.jpg",
	      "alt": "Image"
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "w3-large"
	  }, [_vm._v("Mingsum")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Lorem ipsum dipsum")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', {
	    staticClass: "w3-container  w3-padding-32 w3-margin-top"
	  }, [_c('button', {
	    staticClass: "w3-btn w3-disabled w3-padding-large w3-margin-bottom"
	  }, [_vm._v("Previous")]), _vm._v(" "), _c('button', {
	    staticClass: "w3-btn w3-padding-large w3-margin-bottom"
	  }, [_vm._v("Next »")])])
	}]}

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	import { getPictureCarousel } from './js/carousel';
	import Navbar from './components/frontend/NavBar.vue';
	import Slideshow from './components/frontend/SlideShow.vue';
	import 'font-awesome/css/font-awesome.min.css';
	import Tag from './components/frontend/Tag.vue';
	__webpack_require__(2);
	
	export default {
	  name: 'app',
	  components: {
	    "navbar": Navbar,
	    "slide-show": Slideshow,
	    "blog-tag": Tag
	  }, methods: {
	    getPictureCarousel
	  }, mounted() {
	    // When the user clicks anywhere outside of the modal, close it
	
	    this.getPictureCarousel();
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueResource from 'vue-resource';
	
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'font-awesome/css/font-awesome.min.css';
	import 'ionicons/dist/css/ionicons.min.css';
	import 'bootstrap/dist/js/bootstrap.js';
	// import 'sweetalert/dist/sweetalert.min.js';
	
	__webpack_require__(8);
	Vue.use(VueResource);
	
	import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
	
	Vue.component('vuetable', Vuetable);
	Vue.component('vuetable-pagination', VuetablePagination);
	Vue.use(VueRouter);
	var requestUrl = "http://localhost:8000";
	module.exports = {
	  Vue: Vue,
	  requestUrl: requestUrl
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 *
	 * Version: 1.3.8
	 *
	 */
	(function (e) {
	  e.fn.extend({ slimScroll: function (f) {
	      var a = e.extend({ width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, f);this.each(function () {
	        function v(d) {
	          if (r) {
	            d = d || window.event;
	            var c = 0;d.wheelDelta && (c = -d.wheelDelta / 120);d.detail && (c = d.detail / 3);e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);d.preventDefault && !k && d.preventDefault();k || (d.returnValue = !1);
	          }
	        }function n(d, g, e) {
	          k = !1;var f = b.outerHeight() - c.outerHeight();g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({ top: g + "px" }));l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());g = l * (b[0].scrollHeight - b.outerHeight());e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({ top: d + "px" }));b.scrollTop(g);b.trigger("slimscrolling", ~~g);w();p();
	        }function x() {
	          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);c.css({ height: u + "px" });var a = u == b.outerHeight() ? "none" : "block";c.css({ display: a });
	        }function w() {
	          x();clearTimeout(B);l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;C = l;u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
	        }function p() {
	          a.alwaysVisible || (B = setTimeout(function () {
	            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
	          }, 1E3));
	        }var r,
	            y,
	            z,
	            B,
	            A,
	            u,
	            l,
	            C,
	            k = !1,
	            b = e(this);if (b.parent().hasClass(a.wrapperClass)) {
	          var q = b.scrollTop(),
	              c = b.siblings("." + a.barClass),
	              m = b.siblings("." + a.railClass);x();if (e.isPlainObject(f)) {
	            if ("height" in f && "auto" == f.height) {
	              b.parent().css("height", "auto");b.css("height", "auto");var h = b.parent().parent().height();b.parent().css("height", h);b.css("height", h);
	            } else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));if ("scrollTo" in f) q = parseInt(a.scrollTo);else if ("scrollBy" in f) q += parseInt(a.scrollBy);else if ("destroy" in f) {
	              c.remove();m.remove();b.unwrap();return;
	            }n(q, !1, !0);
	          }
	        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
	          a.height = "auto" == a.height ? b.parent().height() : a.height;q = e("<div></div>").addClass(a.wrapperClass).css({ position: "relative", overflow: "hidden", width: a.width, height: a.height });b.css({ overflow: "hidden",
	            width: a.width, height: a.height });var m = e("<div></div>").addClass(a.railClass).css({ width: a.size, height: "100%", position: "absolute", top: 0, display: a.alwaysVisible && a.railVisible ? "block" : "none", "border-radius": a.railBorderRadius, background: a.railColor, opacity: a.railOpacity, zIndex: 90 }),
	              c = e("<div></div>").addClass(a.barClass).css({ background: a.color, width: a.size, position: "absolute", top: 0, opacity: a.opacity, display: a.alwaysVisible ? "block" : "none", "border-radius": a.borderRadius, BorderRadius: a.borderRadius, MozBorderRadius: a.borderRadius,
	            WebkitBorderRadius: a.borderRadius, zIndex: 99 }),
	              h = "right" == a.position ? { right: a.distance } : { left: a.distance };m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable && c.bind("mousedown", function (a) {
	            var b = e(document);z = !0;t = parseFloat(c.css("top"));pageY = a.pageY;b.bind("mousemove.slimscroll", function (a) {
	              currTop = t + a.pageY - pageY;c.css("top", currTop);n(0, c.position().top, !1);
	            });b.bind("mouseup.slimscroll", function (a) {
	              z = !1;p();b.unbind(".slimscroll");
	            });return !1;
	          }).bind("selectstart.slimscroll", function (a) {
	            a.stopPropagation();a.preventDefault();return !1;
	          });m.hover(function () {
	            w();
	          }, function () {
	            p();
	          });c.hover(function () {
	            y = !0;
	          }, function () {
	            y = !1;
	          });b.hover(function () {
	            r = !0;w();p();
	          }, function () {
	            r = !1;p();
	          });b.bind("touchstart", function (a, b) {
	            a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
	          });b.bind("touchmove", function (b) {
	            k || b.originalEvent.preventDefault();b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY);
	          });
	          x();"bottom" === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
	        }
	      });return this;
	    } });e.fn.extend({ slimscroll: e.fn.slimScroll });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	import VueRouter from 'vue-router';
	import Table from './components/admin/Table';
	import Post from './components/admin/Post';
	import Editor from './components/admin/Editor.vue';
	import Tag from './components/admin/Tag.vue';
	import Setting from './components/admin/Setting.vue';
	import DetailedPost from './components/frontend/Post.vue';
	import Home from './components/frontend/Home.vue';
	let routes = [{
	  path: '/table',
	  component: Table
	}, {
	  path: '/post',
	  component: Post
	}, {
	  path: '/editor',
	  component: Editor
	}, {
	  path: '/tag',
	  component: Tag
	}, {
	  path: '/setting',
	  component: Setting
	}, {
	  path: '/detailedpost',
	  component: DetailedPost
	}, {
	  path: '/home',
	  component: Home
	}];
	export default new VueRouter({
	  routes
	});

/***/ }
]);
//# sourceMappingURL=app.2dd214305e9b36bf1ea9.js.map