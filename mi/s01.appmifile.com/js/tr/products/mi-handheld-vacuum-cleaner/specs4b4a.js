!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6)}([function(module,exports,__webpack_require__){__webpack_require__(5)},function(module,exports){!function($){function visibleWatcher(opt){function getCurrentSection(){for(var index=-1,pos=$(document).scrollTop(),i=0,len=sectionPosArr.length;i<len&&pos+options.viewport.height()>sectionPosArr[i];i+=1)index+=1;return index}function refresh(){var viewIndex=getCurrentSection();curIndex!==viewIndex&&(curIndex=viewIndex,$sections.filter(function(i){return i<=curIndex&&!$(this).hasClass(options.visibleClass)}).addClass(options.visibleClass).trigger("visible.visibleWatcher"),options.onVisible($sections.eq(curIndex),curIndex))}function init(){$sections.each(function(){var offsetValue=$(this).attr("data-offset")?Number($(this).attr("data-offset")):options.offset,visibleOffset=offsetValue%1==0?offsetValue:offsetValue*options.viewport.height();sectionPosArr.push($(this).offset().top+visibleOffset)}),refresh(),options.onLoad()}var defaults,options,$sections=$(this),curIndex=-1,sectionPosArr=[];defaults={viewport:$(window),visibleClass:"is-visible",offset:300,onLoad:$.noop,onVisible:$.noop},options=$.extend({},defaults,opt),init(),options.viewport.on({"scroll.visibleWatcher":refresh,"resize.visibleWatcher":init})}$.fn.visibleWatcher=function(opt){return visibleWatcher.call(this,opt),this}}(jQuery)},function(module,exports){$(function(){var $sectionBox=$(".J_section-box"),$navbarBox=$(".J_nav-bar-con"),navHeight=$(".J_nav-bar-con").height();$(window).on("scroll",function(){$(window).scrollTop()>=$sectionBox.offset().top-navHeight?$navbarBox.addClass("J_fixNavbar"):$navbarBox.removeClass("J_fixNavbar")})})},function(module,exports){$(function(){window.supportsVideo=function(){return!!document.createElement("video").canPlayType}(),window.loadImage=function(obj){if(obj.data("src")){var img=new Image;if(img.src=obj.data("src"),img.complete)return void obj.attr("src",img.src);img.onload=function(){obj.attr("src",img.src)}}}})},function(module,exports,__webpack_require__){__webpack_require__(2),__webpack_require__(1),__webpack_require__(3)},function(module,exports,__webpack_require__){__webpack_require__(4),$(document).ready(function(){var $sections=$("#J_vacuum-cleanerSpecs").find(".section");$sections.visibleWatcher({onVisible:function(elm,index){$sections.filter(function(i){return i<=index+1}).addClass("preload")}})})},function(module,exports,__webpack_require__){module.exports=__webpack_require__(0)}]);