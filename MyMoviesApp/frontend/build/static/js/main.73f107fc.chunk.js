/*! For license information please see main.73f107fc.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{32:function(e,t,n){e.exports=n(78)},37:function(e,t,n){},38:function(e,t,n){},56:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=(n(37),n(14)),l=n(2),s=n(4),u=n(3);function h(){h=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:k(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var f={};function m(){}function v(){}function d(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,E=g&&g(g(S([])));E&&E!==t&&n.call(E,o)&&(p=E);var y=d.prototype=m.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function k(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return j()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=d,a(y,"constructor",{value:d,configurable:!0}),a(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var f=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(!1),c=Object(u.a)(i,2),l=c[0],f=c[1],m=function(){var e=Object(s.a)(h().mark((function e(t){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:n=e.sent,o(n);case 5:f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,fetch("https://api.themoviedb.org/3".concat(e));case 4:n=t.sent,m(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),f(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[e]),{results:r,isLoading:l,reLoad:function(){var t=Object(s.a)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,fetch("https://api.themoviedb.org/3".concat(e));case 4:n=t.sent,m(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),f(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()}},m="475dbd3c6ea41a0420d36fa392df5a6b",v={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99"),fetchSearch:"/search/movie?api_key=".concat(m,"&language=en-US")};n(38);var d=function(){var e=f(v.fetchNetflixOriginals),t=e.results,n=e.isLoading;if(!t||!t.results||0===t.results.length)return null;var a=t.results[Math.floor(Math.random()*t.results.length)];return r.a.createElement("div",{className:"container"},n?r.a.createElement("h1",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"banner-container"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(a.backdrop_path),alt:a.name,className:"banner-img"}),r.a.createElement("div",{className:"infoGroup"},r.a.createElement("h1",{className:"banner-name"},a.name),r.a.createElement("div",{className:"btnGroup"},r.a.createElement("button",{className:"buttonBannerPlay"},"Play"),r.a.createElement("button",{className:"buttonBannerMyList"},"My List")),r.a.createElement("p",{className:"banner-overview"},a.overview))))},p=n(27),g=n.n(p),E=(n(54),n(55),n(56),n(28)),y=n.n(E),w=n(29);n(72);var b=function(e){var t,n=e.movieData,a=e.isShowMovieDetail,o=e.isBannerList,i=n.id,c=n.title,l=n.release_date,s=n.vote_average,u=n.backdrop_path,h=n.overview,v=n.poster_path,d=n.name,p="/movie/".concat(i,"/videos?api_key=").concat(m),g=f(p),E=g.results,b=g.isLoading,k=null===E||void 0===E||null===(t=E.results)||void 0===t?void 0:t.find((function(e){return"YouTube"===e.site&&("Trailer"===e.type||"Teaser"===e.type)}));return a&&r.a.createElement("div",{className:"movieDetails"},r.a.createElement("div",{className:"movieDetailContainer"},r.a.createElement("h1",{className:"title"},o?d:c),r.a.createElement("div",{className:"line"}),r.a.createElement("h4",null,"Release Date: ",y()(l).format("YYYY-MM-DD")),r.a.createElement("h4",{className:"vote"},"Vote: ",s,"/10"),r.a.createElement("p",null,h)),b&&r.a.createElement("h1",null,"Loading..."),!b&&k&&r.a.createElement("div",{className:"trailer"},r.a.createElement(w.a,{videoId:k.key,opts:{height:"400",width:"100%",playerVars:{autoplay:0}}})),!b&&!k&&r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(o?v:u),alt:"Backdrop",style:{width:"100%"}}))};var k=function(e){var t,n=e.apiEndpoint,o=e.isOriginal,i=f(n),c=i.results,l=i.isLoading,s=Object(a.useState)(!1),h=Object(u.a)(s,2),m=h[0],v=h[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),E=p[0],y=p[1],w=Object(a.useState)({}),k=Object(u.a)(w,2),N=k[0],L=k[1],x={dots:!1,infinite:!0,speed:1e3,slidesToShow:9,slidesToScroll:5,autoplaySpeed:3e3,cssEase:"linear"},O=function(e,t){v(!m),L(e),y(t)};return r.a.createElement("div",{className:"movieList"},l?r.a.createElement("h1",null,"Loading..."):r.a.createElement(g.a,x,null===c||void 0===c||null===(t=c.results)||void 0===t?void 0:t.map((function(e){return r.a.createElement("div",{className:"movieItem",key:e.id},o?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path),alt:e.title||e.name,className:"movieImgPoster",onClick:function(){return O(e,o)}}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.backdrop_path),alt:e.title||e.name,className:"movieImgBackDrop",onClick:function(){return O(e,o)}}))}))),r.a.createElement(b,{isShowMovieDetail:m,movieData:N,isBannerList:E}))},N=(n(73),function(){var e=Object(a.useState)("transparent"),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=function(){window.scrollY>100?o("black"):o("transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("nav",{className:"navbar ".concat(n)},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:"/",className:"navbar-title"},"Movie App"),r.a.createElement("div",{className:"navbar-search"},r.a.createElement(c.b,{to:"/search",className:"navbar-search-link"},r.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))))))});n(74);var L=function(){return r.a.createElement("div",{className:"browseContainer"},r.a.createElement(N,null),r.a.createElement(d,null),r.a.createElement(k,{apiEndpoint:v.fetchNetflixOriginals,isOriginal:!0}),r.a.createElement("h3",null,"Xu H\u01b0\u1edbng"),r.a.createElement(k,{apiEndpoint:v.fetchTrending}),r.a.createElement("h3",null,"X\u1ebfp h\u1ea1ng cao"),r.a.createElement(k,{apiEndpoint:v.fetchTopRated}),r.a.createElement("h3",null,"H\xe0nh \u0111\u1ed9ng"),r.a.createElement(k,{apiEndpoint:v.fetchActionMovies}),r.a.createElement("h3",null,"H\xe0i"),r.a.createElement(k,{apiEndpoint:v.fetchComedyMovies}),r.a.createElement("h3",null,"Kinh d\u1ecb"),r.a.createElement(k,{apiEndpoint:v.fetchHorrorMovies}),r.a.createElement("h3",null,"L\xe3ng m\u1ea1ng"),r.a.createElement(k,{apiEndpoint:v.fetchRomanceMovies}),r.a.createElement("h3",null,"T\xe0i li\u1ec7u"),r.a.createElement(k,{apiEndpoint:v.fetchDocumentaries}))};n(75),n(76);var x=function(e){var t=e.searchValue,n=e.handleSearchValue,a=e.handleSearch,o=e.handleReset;return r.a.createElement("div",{className:"searchForm"},r.a.createElement("div",{className:"inputGr"},r.a.createElement("input",{type:"text",className:"searchInput",onChange:n,value:t}),r.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",width:200,height:200,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",onClick:a},r.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"btnSearchGr"},r.a.createElement("button",{className:"resetBtn",onClick:o},"RESET"),r.a.createElement("button",{className:"searchBtn",onClick:a},"SEARCH")))};n(77);var O=function(e){var t,n=e.url,o=e.isSearch,i=f(n),c=i.results,l=i.isLoading,s=Object(a.useState)(!1),h=Object(u.a)(s,2),m=h[0],v=h[1],d=Object(a.useState)({}),p=Object(u.a)(d,2),g=p[0],E=p[1];return r.a.createElement("div",{className:"resultList"},l?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"resultContainer"},o&&(null===c||void 0===c||null===(t=c.results)||void 0===t?void 0:t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"resultItem",key:e.name},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path),alt:e.title||e.name,className:"resultPoster",onClick:function(){return function(e){v(!m),E(e)}(e)}})))}))),r.a.createElement(b,{isShowMovieDetail:m,movieData:g,isBannerList:!1})))},S=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),c=Object(u.a)(i,2),l=c[0],s=c[1],h="/search/movie?api_key=".concat(m,"&language=en&query=").concat(n);return r.a.createElement("div",{className:"searchContainer"},r.a.createElement(N,null),r.a.createElement(x,{searchValue:n,setSearchValue:o,handleSearchValue:function(e){o(e.target.value)},handleSearch:function(){s(!0)},handleReset:function(){s(!1),o("")}}),r.a.createElement("h2",null,"Search Result"),r.a.createElement(O,{url:h,isSearch:l}))};var j=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(L,null)}),r.a.createElement(l.a,{path:"/search",element:r.a.createElement(S,null)})))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.73f107fc.chunk.js.map