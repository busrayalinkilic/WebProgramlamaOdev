!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports,__webpack_require__){__webpack_require__(2)},function(module,exports){$(function(){var $sectionBox=$(".J_section-box"),$navbarBox=$(".J_nav-bar-con"),navHeight=$(".J_nav-bar-con").height();$(window).on("scroll",function(){$(window).scrollTop()>=$sectionBox.offset().top-navHeight?$navbarBox.addClass("J_fixNavbar"):$navbarBox.removeClass("J_fixNavbar")})})},function(module,exports,__webpack_require__){__webpack_require__(1),$(function(){$("#J_colorSwitch").find("li").bind("click",function(){$("#J_colorSwitch").find("li").removeClass("active");var index=$(this).attr("data-index");$("#J_colorPreview").find("li").eq(index-1).addClass("active").siblings("li").removeClass("active"),$(".text").find("p").eq(index-1).addClass("active").siblings("p").removeClass("active"),$(this).addClass("active")})})},function(module,exports,__webpack_require__){module.exports=__webpack_require__(0)}]);