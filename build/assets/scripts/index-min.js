!function(e){var t={};function s(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s(1)(),s(2)(),s(3)()},function(e,t,s){"use strict";e.exports=function(){var e=document.querySelector(".ham"),t=document.querySelector(".aside"),s=document.querySelector(".aside_cross");t&&(e.addEventListener("click",function(){t.classList.toggle("aside--active"),e.classList.remove("active")}),s.addEventListener("click",function(){t.classList.remove("aside--active")}))}},function(e,t,s){"use strict";e.exports=function(){$(".catalog-list_wrap").slick({dots:!0,dotsClass:"catalog-list_pagination",arrows:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:770,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".reviews_list").slick({dots:!0,dotsClass:"reviews_pagination",arrows:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:770,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".project-page_slider-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".project-page_slider-nav"}),$(".project-page_slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".project-page_slider-list",dots:!1,arrows:!1,centerMode:!0,focusOnSelect:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".main-slider_list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,vertical:!0,dots:!0,dotsClass:"main-slider_pagination",autoplay:!0,autoplaySpeed:8e3})}},function(e,t,s){"use strict";e.exports=function(){var e=document.querySelector(".seo-text_content"),t=document.querySelector(".seo-text_btn");e&&t.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("seo-text_content--active")})}}]);