!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(module,exports){!function($){function visibleWatcher(opt){function getCurrentSection(){for(var index=-1,pos=$(document).scrollTop(),i=0,len=sectionPosArr.length;i<len&&pos+options.viewport.height()>sectionPosArr[i];i+=1)index+=1;return index}function refresh(){var viewIndex=getCurrentSection();curIndex!==viewIndex&&(curIndex=viewIndex,$sections.filter(function(i){return i<=curIndex&&!$(this).hasClass(options.visibleClass)}).addClass(options.visibleClass).trigger("visible.visibleWatcher"),options.onVisible($sections.eq(curIndex),curIndex))}function init(){$sections.each(function(){var offsetValue=$(this).attr("data-offset")?Number($(this).attr("data-offset")):options.offset,visibleOffset=offsetValue%1==0?offsetValue:offsetValue*options.viewport.height();sectionPosArr.push($(this).offset().top+visibleOffset)}),refresh(),options.onLoad()}var defaults,options,$sections=$(this),curIndex=-1,sectionPosArr=[];defaults={viewport:$(window),visibleClass:"is-visible",offset:300,onLoad:$.noop,onVisible:$.noop},options=$.extend({},defaults,opt),init(),options.viewport.on({"scroll.visibleWatcher":refresh,"resize.visibleWatcher":init})}$.fn.visibleWatcher=function(opt){return visibleWatcher.call(this,opt),this}}(jQuery)},function(module,exports){window.modalPlayVideo=function($target,$modal){var videodata=$target.attr("data-video"),videoTitle=$target.attr("data-video-title");if(videodata){var videosrc="<iframe frameborder='0' allowfullscreen width='854' height='480' src='"+videodata+"' type='application/x-shockwave-flash' quality='high' align='middle'/></iframe>";return $modal.addClass("modal-video"),$modal.find(".modal-body").html(""),$modal.find(".modal-body").append(videosrc),videoTitle&&$modal.find(".modal-header .title").text(videoTitle),$modal.modal("show").on("hidden",function(){$modal.removeClass("modal-video"),$modal.find(".modal-body").html(""),$modal.find(".modal-header .title").text("")}),!1}}},function(module,exports){$(function(){var $sectionBox=$(".J_section-box"),$navbarBox=$(".J_nav-bar-con"),navHeight=$(".J_nav-bar-con").height();$(window).on("scroll",function(){$(window).scrollTop()>=$sectionBox.offset().top-navHeight?$navbarBox.addClass("J_fixNavbar"):$navbarBox.removeClass("J_fixNavbar")})})},function(module,exports,__webpack_require__){__webpack_require__(6)},function(module,exports){!function($){var plugin={},defaults={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"ui-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Previous",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:$.noop,onSlideBefore:$.noop,onSlideAfter:$.noop,onSlideNext:$.noop,onSlidePrev:$.noop,onSliderResize:$.noop};$.fn.slider=function(options){if(0==this.length)return this;if(this.length>1)return this.each(function(){$(this).slider(options)}),this;var slider={},el=this;plugin.el=this;var windowWidth=$(window).width(),windowHeight=$(window).height(),init=function(){slider.settings=$.extend({},defaults,options),slider.settings.slideWidth=parseInt(slider.settings.slideWidth),slider.children=el.children(slider.settings.slideSelector),slider.children.length<slider.settings.minSlides&&(slider.settings.minSlides=slider.children.length),slider.children.length<slider.settings.maxSlides&&(slider.settings.maxSlides=slider.children.length),slider.settings.randomStart&&(slider.settings.startSlide=Math.floor(Math.random()*slider.children.length)),slider.active={index:slider.settings.startSlide},slider.carousel=slider.settings.minSlides>1||slider.settings.maxSlides>1,slider.carousel&&(slider.settings.preloadImages="all"),slider.minThreshold=slider.settings.minSlides*slider.settings.slideWidth+(slider.settings.minSlides-1)*slider.settings.slideMargin,slider.maxThreshold=slider.settings.maxSlides*slider.settings.slideWidth+(slider.settings.maxSlides-1)*slider.settings.slideMargin,slider.working=!1,slider.controls={},slider.interval=null,slider.animProp="vertical"==slider.settings.mode?"top":"left",slider.usingCSS=slider.settings.useCSS&&"fade"!=slider.settings.mode&&function(){var div=document.createElement("div"),props=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in props)if(void 0!==div.style[props[i]])return slider.cssPrefix=props[i].replace("Perspective","").toLowerCase(),slider.animProp="-"+slider.cssPrefix+"-transform",!0;return!1}(),"vertical"==slider.settings.mode&&(slider.settings.maxSlides=slider.settings.minSlides),el.data("origStyle",el.attr("style")),el.children(slider.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),setup()},setup=function(){el.wrap('<div class="'+slider.settings.wrapperClass+'"><div class="ui-viewport"></div></div>'),slider.viewport=el.parent(),slider.loader=$('<div class="ui-loading" />'),slider.viewport.prepend(slider.loader),el.css({width:"horizontal"==slider.settings.mode?100*slider.children.length+215+"%":"auto",position:"relative"}),slider.usingCSS&&slider.settings.easing?el.css("-"+slider.cssPrefix+"-transition-timing-function",slider.settings.easing):slider.settings.easing||(slider.settings.easing="swing");getNumberSlidesShowing();slider.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),slider.viewport.parent().css({maxWidth:getViewportMaxWidth()}),slider.settings.pager||slider.viewport.parent().css({margin:"0 auto 0px"}),slider.children.css({float:"horizontal"==slider.settings.mode?"left":"none",listStyle:"none",position:"relative"}),slider.children.css("width",getSlideWidth()),"horizontal"==slider.settings.mode&&slider.settings.slideMargin>0&&slider.children.css("marginRight",slider.settings.slideMargin),"vertical"==slider.settings.mode&&slider.settings.slideMargin>0&&slider.children.css("marginBottom",slider.settings.slideMargin),"fade"==slider.settings.mode&&(slider.children.css({position:"absolute",zIndex:0,display:"none"}),slider.children.eq(slider.settings.startSlide).css({zIndex:slider.settings.slideZIndex,display:"block"})),slider.controls.el=$('<div class="ui-controls" />'),slider.settings.captions&&appendCaptions(),slider.active.last=slider.settings.startSlide==getPagerQty()-1,slider.settings.video&&el.fitVids();var preloadSelector=slider.children.eq(slider.settings.startSlide);"all"==slider.settings.preloadImages&&(preloadSelector=slider.children),slider.settings.ticker?slider.settings.pager=!1:(slider.settings.pager&&appendPager(),slider.settings.controls&&appendControls(),slider.settings.auto&&slider.settings.autoControls&&appendControlsAuto(),(slider.settings.controls||slider.settings.autoControls||slider.settings.pager)&&slider.viewport.after(slider.controls.el)),loadElements(preloadSelector,start)},loadElements=function(selector,callback){var total=selector.find("img, iframe").length;if(0==total)return void callback();var count=0;selector.find("img, iframe").each(function(){$(this).one("load",function(){++count==total&&callback()}).each(function(){this.complete&&$(this).trigger("load")})})},start=function(){if(slider.settings.infiniteLoop&&"fade"!=slider.settings.mode&&!slider.settings.ticker){var slice="vertical"==slider.settings.mode?slider.settings.minSlides:slider.settings.maxSlides,sliceAppend=slider.children.slice(0,slice).clone().addClass("ui-clone"),slicePrepend=slider.children.slice(-slice).clone().addClass("ui-clone");el.append(sliceAppend).prepend(slicePrepend)}slider.loader.remove(),setSlidePosition(),"vertical"==slider.settings.mode&&(slider.settings.adaptiveHeight=!0),slider.viewport.height(getViewportHeight()),el.redrawSlider(),slider.settings.onSliderLoad(slider.active.index),slider.initialized=!0,slider.settings.responsive&&$(window).bind("resize",resizeWindow),slider.settings.auto&&slider.settings.autoStart&&(getPagerQty()>1||slider.settings.autoSlideForOnePage)&&initAuto(),slider.settings.ticker&&initTicker(),slider.settings.pager&&updatePagerActive(slider.settings.startSlide),slider.settings.controls&&updateDirectionControls(),slider.settings.touchEnabled&&!slider.settings.ticker&&initTouch()},getViewportHeight=function(){var height=0,children=$();if("vertical"==slider.settings.mode||slider.settings.adaptiveHeight)if(slider.carousel){var currentIndex=1==slider.settings.moveSlides?slider.active.index:slider.active.index*getMoveBy();for(children=slider.children.eq(currentIndex),i=1;i<=slider.settings.maxSlides-1;i++)children=currentIndex+i>=slider.children.length?children.add(slider.children.eq(i-1)):children.add(slider.children.eq(currentIndex+i))}else children=slider.children.eq(slider.active.index);else children=slider.children;return"vertical"==slider.settings.mode?(children.each(function(index){height+=$(this).outerHeight()}),slider.settings.slideMargin>0&&(height+=slider.settings.slideMargin*(slider.settings.minSlides-1))):height=Math.max.apply(Math,children.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==slider.viewport.css("box-sizing")?height+=parseFloat(slider.viewport.css("padding-top"))+parseFloat(slider.viewport.css("padding-bottom"))+parseFloat(slider.viewport.css("border-top-width"))+parseFloat(slider.viewport.css("border-bottom-width")):"padding-box"==slider.viewport.css("box-sizing")&&(height+=parseFloat(slider.viewport.css("padding-top"))+parseFloat(slider.viewport.css("padding-bottom"))),height},getViewportMaxWidth=function(){var width="100%";return slider.settings.slideWidth>0&&(width="horizontal"==slider.settings.mode?slider.settings.maxSlides*slider.settings.slideWidth+(slider.settings.maxSlides-1)*slider.settings.slideMargin:slider.settings.slideWidth),width},getSlideWidth=function(){var newElWidth=slider.settings.slideWidth,wrapWidth=slider.viewport.width();return 0==slider.settings.slideWidth||slider.settings.slideWidth>wrapWidth&&!slider.carousel||"vertical"==slider.settings.mode?newElWidth=wrapWidth:slider.settings.maxSlides>1&&"horizontal"==slider.settings.mode&&(wrapWidth>slider.maxThreshold||wrapWidth<slider.minThreshold&&(newElWidth=(wrapWidth-slider.settings.slideMargin*(slider.settings.minSlides-1))/slider.settings.minSlides)),newElWidth},getNumberSlidesShowing=function(){var slidesShowing=1;if("horizontal"==slider.settings.mode&&slider.settings.slideWidth>0)if(slider.viewport.width()<slider.minThreshold)slidesShowing=slider.settings.minSlides;else if(slider.viewport.width()>slider.maxThreshold)slidesShowing=slider.settings.maxSlides;else{var childWidth=slider.children.first().width()+slider.settings.slideMargin;slidesShowing=Math.floor((slider.viewport.width()+slider.settings.slideMargin)/childWidth)}else"vertical"==slider.settings.mode&&(slidesShowing=slider.settings.minSlides);return slidesShowing},getPagerQty=function(){var pagerQty=0;if(slider.settings.moveSlides>0)if(slider.settings.infiniteLoop)pagerQty=Math.ceil(slider.children.length/getMoveBy());else for(var breakPoint=0,counter=0;breakPoint<slider.children.length;)++pagerQty,breakPoint=counter+getNumberSlidesShowing(),counter+=slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing();else pagerQty=Math.ceil(slider.children.length/getNumberSlidesShowing());return pagerQty},getMoveBy=function(){return slider.settings.moveSlides>0&&slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing()},setSlidePosition=function(){if(slider.children.length>slider.settings.maxSlides&&slider.active.last&&!slider.settings.infiniteLoop){if("horizontal"==slider.settings.mode){var lastChild=slider.children.last(),position=lastChild.position();setPositionProperty(-(position.left-(slider.viewport.width()-lastChild.outerWidth())),"reset",0)}else if("vertical"==slider.settings.mode){var lastShowingIndex=slider.children.length-slider.settings.minSlides,position=slider.children.eq(lastShowingIndex).position();setPositionProperty(-position.top,"reset",0)}}else{var position=slider.children.eq(slider.active.index*getMoveBy()).position();slider.active.index==getPagerQty()-1&&(slider.active.last=!0),void 0!=position&&("horizontal"==slider.settings.mode?setPositionProperty(-position.left,"reset",0):"vertical"==slider.settings.mode&&setPositionProperty(-position.top,"reset",0))}},setPositionProperty=function(value,type,duration,params){if(slider.usingCSS){var propValue="vertical"==slider.settings.mode?"translate3d(0, "+value+"px, 0)":"translate3d("+value+"px, 0, 0)";el.css("-"+slider.cssPrefix+"-transition-duration",duration/1e3+"s"),"slide"==type?(el.css(slider.animProp,propValue),el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),updateAfterSlideTransition()})):"reset"==type?el.css(slider.animProp,propValue):"ticker"==type&&(el.css("-"+slider.cssPrefix+"-transition-timing-function","linear"),el.css(slider.animProp,propValue),el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),setPositionProperty(params.resetValue,"reset",0),tickerLoop()}))}else{var animateObj={};animateObj[slider.animProp]=value,"slide"==type?el.animate(animateObj,duration,slider.settings.easing,function(){updateAfterSlideTransition()}):"reset"==type?el.css(slider.animProp,value):"ticker"==type&&el.animate(animateObj,speed,"linear",function(){setPositionProperty(params.resetValue,"reset",0),tickerLoop()})}},populatePager=function(){for(var pagerHtml="",pagerQty=getPagerQty(),i=0;i<pagerQty;i++){var linkContent="";slider.settings.buildPager&&$.isFunction(slider.settings.buildPager)?(linkContent=slider.settings.buildPager(i),slider.pagerEl.addClass("ui-custom-pager")):(linkContent=i+1,slider.pagerEl.addClass("ui-default-pager")),pagerHtml+='<div class="ui-pager-item"><a href="" data-slide-index="'+i+'" class="ui-pager-link">'+linkContent+"</a></div>"}slider.pagerEl.html(pagerHtml)},appendPager=function(){slider.settings.pagerCustom?slider.pagerEl=$(slider.settings.pagerCustom):(slider.pagerEl=$('<div class="ui-pager" />'),slider.settings.pagerSelector?$(slider.settings.pagerSelector).html(slider.pagerEl):slider.controls.el.addClass("ui-has-pager").append(slider.pagerEl),populatePager()),slider.pagerEl.on("click","a",clickPagerBind)},appendControls=function(){slider.controls.next=$('<a class="ui-next" href="">'+slider.settings.nextText+"</a>"),slider.controls.prev=$('<a class="ui-prev" href="">'+slider.settings.prevText+"</a>"),slider.controls.next.bind("click",clickNextBind),slider.controls.prev.bind("click",clickPrevBind),slider.settings.nextSelector&&$(slider.settings.nextSelector).append(slider.controls.next),slider.settings.prevSelector&&$(slider.settings.prevSelector).append(slider.controls.prev),slider.settings.nextSelector||slider.settings.prevSelector||(slider.controls.directionEl=$('<div class="ui-controls-direction" />'),slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next),slider.controls.el.addClass("ui-has-controls-direction").append(slider.controls.directionEl))},appendControlsAuto=function(){slider.controls.start=$('<div class="ui-controls-auto-item"><a class="ui-start" href="">'+slider.settings.startText+"</a></div>"),slider.controls.stop=$('<div class="ui-controls-auto-item"><a class="ui-stop" href="">'+slider.settings.stopText+"</a></div>"),slider.controls.autoEl=$('<div class="ui-controls-auto" />'),slider.controls.autoEl.on("click",".ui-start",clickStartBind),slider.controls.autoEl.on("click",".ui-stop",clickStopBind),slider.settings.autoControlsCombine?slider.controls.autoEl.append(slider.controls.start):slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop),slider.settings.autoControlsSelector?$(slider.settings.autoControlsSelector).html(slider.controls.autoEl):slider.controls.el.addClass("ui-has-controls-auto").append(slider.controls.autoEl),updateAutoControls(slider.settings.autoStart?"stop":"start")},appendCaptions=function(){slider.children.each(function(index){var title=$(this).find("img:first").attr("title");void 0!=title&&(""+title).length&&$(this).append('<div class="ui-caption"><span>'+title+"</span></div>")})},clickNextBind=function(e){slider.settings.auto&&el.stopAuto(),el.goToNextSlide(),e.preventDefault()},clickPrevBind=function(e){slider.settings.auto&&el.stopAuto(),el.goToPrevSlide(),e.preventDefault()},clickStartBind=function(e){el.startAuto(),e.preventDefault()},clickStopBind=function(e){el.stopAuto(),e.preventDefault()},clickPagerBind=function(e){slider.settings.auto&&el.stopAuto();var pagerLink=$(e.currentTarget);if(void 0!==pagerLink.attr("data-slide-index")){var pagerIndex=parseInt(pagerLink.attr("data-slide-index"));pagerIndex!=slider.active.index&&el.goToSlide(pagerIndex),e.preventDefault()}},updatePagerActive=function(slideIndex){var len=slider.children.length;if("short"==slider.settings.pagerType)return slider.settings.maxSlides>1&&(len=Math.ceil(slider.children.length/slider.settings.maxSlides)),void slider.pagerEl.html(slideIndex+1+slider.settings.pagerShortSeparator+len);slider.pagerEl.find("a").removeClass("active"),slider.pagerEl.each(function(i,el){$(el).find("a").eq(slideIndex).addClass("active")})},updateAfterSlideTransition=function(){if(slider.settings.infiniteLoop){var position="";0==slider.active.index?position=slider.children.eq(0).position():slider.active.index==getPagerQty()-1&&slider.carousel?position=slider.children.eq((getPagerQty()-1)*getMoveBy()).position():slider.active.index==slider.children.length-1&&(position=slider.children.eq(slider.children.length-1).position()),position&&("horizontal"==slider.settings.mode?setPositionProperty(-position.left,"reset",0):"vertical"==slider.settings.mode&&setPositionProperty(-position.top,"reset",0))}slider.working=!1,slider.settings.onSlideAfter(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)},updateAutoControls=function(state){slider.settings.autoControlsCombine?slider.controls.autoEl.html(slider.controls[state]):(slider.controls.autoEl.find("a").removeClass("active"),slider.controls.autoEl.find("a:not(.ui-"+state+")").addClass("active"))},updateDirectionControls=function(){1==getPagerQty()?(slider.controls.prev.addClass("disabled"),slider.controls.next.addClass("disabled")):!slider.settings.infiniteLoop&&slider.settings.hideControlOnEnd&&(0==slider.active.index?(slider.controls.prev.addClass("disabled"),slider.controls.next.removeClass("disabled")):slider.active.index==getPagerQty()-1?(slider.controls.next.addClass("disabled"),slider.controls.prev.removeClass("disabled")):(slider.controls.prev.removeClass("disabled"),slider.controls.next.removeClass("disabled")))},initAuto=function(){if(slider.settings.autoDelay>0){setTimeout(el.startAuto,slider.settings.autoDelay)}else el.startAuto();slider.settings.autoHover&&el.hover(function(){slider.interval&&(el.stopAuto(!0),slider.autoPaused=!0)},function(){slider.autoPaused&&(el.startAuto(!0),slider.autoPaused=null)})},initTicker=function(){var startPosition=0;if("next"==slider.settings.autoDirection)el.append(slider.children.clone().addClass("ui-clone"));else{el.prepend(slider.children.clone().addClass("ui-clone"));var position=slider.children.first().position();startPosition="horizontal"==slider.settings.mode?-position.left:-position.top}setPositionProperty(startPosition,"reset",0),slider.settings.pager=!1,slider.settings.controls=!1,slider.settings.autoControls=!1,slider.settings.tickerHover&&!slider.usingCSS&&slider.viewport.hover(function(){el.stop()},function(){var totalDimens=0;slider.children.each(function(index){totalDimens+="horizontal"==slider.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var ratio=slider.settings.speed/totalDimens,property="horizontal"==slider.settings.mode?"left":"top",newSpeed=ratio*(totalDimens-Math.abs(parseInt(el.css(property))));tickerLoop(newSpeed)}),tickerLoop()},tickerLoop=function(resumeSpeed){speed=resumeSpeed||slider.settings.speed;var position={left:0,top:0},reset={left:0,top:0};"next"==slider.settings.autoDirection?position=el.find(".ui-clone").first().position():reset=slider.children.first().position();var animateProperty="horizontal"==slider.settings.mode?-position.left:-position.top,resetValue="horizontal"==slider.settings.mode?-reset.left:-reset.top,params={resetValue:resetValue};setPositionProperty(animateProperty,"ticker",speed,params)},initTouch=function(){slider.touch={start:{x:0,y:0},end:{x:0,y:0}},slider.viewport.bind("touchstart",onTouchStart)},onTouchStart=function(e){if(slider.working)e.preventDefault();else{slider.touch.originalPos=el.position();var orig=e.originalEvent;slider.touch.start.x=orig.changedTouches[0].pageX,slider.touch.start.y=orig.changedTouches[0].pageY,slider.viewport.bind("touchmove",onTouchMove),slider.viewport.bind("touchend",onTouchEnd)}},onTouchMove=function(e){var orig=e.originalEvent,xMovement=Math.abs(orig.changedTouches[0].pageX-slider.touch.start.x),yMovement=Math.abs(orig.changedTouches[0].pageY-slider.touch.start.y);if(3*xMovement>yMovement&&slider.settings.preventDefaultSwipeX?e.preventDefault():3*yMovement>xMovement&&slider.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=slider.settings.mode&&slider.settings.oneToOneTouch){var value=0;if("horizontal"==slider.settings.mode){var change=orig.changedTouches[0].pageX-slider.touch.start.x;value=slider.touch.originalPos.left+change}else{var change=orig.changedTouches[0].pageY-slider.touch.start.y;value=slider.touch.originalPos.top+change}setPositionProperty(value,"reset",0)}},onTouchEnd=function(e){slider.viewport.unbind("touchmove",onTouchMove);var orig=e.originalEvent,value=0;if(slider.touch.end.x=orig.changedTouches[0].pageX,slider.touch.end.y=orig.changedTouches[0].pageY,"fade"==slider.settings.mode){var distance=Math.abs(slider.touch.start.x-slider.touch.end.x);distance>=slider.settings.swipeThreshold&&(slider.touch.start.x>slider.touch.end.x?el.goToNextSlide():el.goToPrevSlide(),el.stopAuto())}else{var distance=0;"horizontal"==slider.settings.mode?(distance=slider.touch.end.x-slider.touch.start.x,value=slider.touch.originalPos.left):(distance=slider.touch.end.y-slider.touch.start.y,value=slider.touch.originalPos.top),!slider.settings.infiniteLoop&&(0==slider.active.index&&distance>0||slider.active.last&&distance<0)?setPositionProperty(value,"reset",200):Math.abs(distance)>=slider.settings.swipeThreshold?(distance<0?el.goToNextSlide():el.goToPrevSlide(),el.stopAuto()):setPositionProperty(value,"reset",200)}slider.viewport.unbind("touchend",onTouchEnd)},resizeWindow=function(e){if(slider.initialized){var windowWidthNew=$(window).width(),windowHeightNew=$(window).height();windowWidth==windowWidthNew&&windowHeight==windowHeightNew||(windowWidth=windowWidthNew,windowHeight=windowHeightNew,el.redrawSlider(),slider.settings.onSliderResize.call(el,slider.active.index))}};return el.goToSlide=function(slideIndex,direction){if(!slider.working&&slider.active.index!=slideIndex)if(slider.working=!0,slider.oldIndex=slider.active.index,slideIndex<0?slider.active.index=getPagerQty()-1:slideIndex>=getPagerQty()?slider.active.index=0:slider.active.index=slideIndex,slider.settings.onSlideBefore(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index),"next"==direction?slider.settings.onSlideNext(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index):"prev"==direction&&slider.settings.onSlidePrev(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index),slider.active.last=slider.active.index>=getPagerQty()-1,slider.settings.pager&&updatePagerActive(slider.active.index),slider.settings.controls&&updateDirectionControls(),"fade"==slider.settings.mode)slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()&&slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed),slider.children.filter(":visible").fadeOut(slider.settings.speed).css({zIndex:0}),slider.children.eq(slider.active.index).css("zIndex",slider.settings.slideZIndex+1).fadeIn(slider.settings.speed,function(){$(this).css("zIndex",slider.settings.slideZIndex),updateAfterSlideTransition()});else{slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()&&slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed);var moveBy=0,position={left:0,top:0};if(!slider.settings.infiniteLoop&&slider.carousel&&slider.active.last)if("horizontal"==slider.settings.mode){var lastChild=slider.children.eq(slider.children.length-1);position=lastChild.position(),moveBy=slider.viewport.width()-lastChild.outerWidth()}else{var lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position()}else if(slider.carousel&&slider.active.last&&"prev"==direction){var eq=1==slider.settings.moveSlides?slider.settings.maxSlides-getMoveBy():(getPagerQty()-1)*getMoveBy()-(slider.children.length-slider.settings.maxSlides),lastChild=el.children(".ui-clone").eq(eq);position=lastChild.position()}else if("next"==direction&&0==slider.active.index)position=el.find("> .ui-clone").eq(slider.settings.maxSlides).position(),slider.active.last=!1;else if(slideIndex>=0){var requestEl=slideIndex*getMoveBy();position=slider.children.eq(requestEl).position()}if(void 0!==position){var value="horizontal"==slider.settings.mode?-(position.left-moveBy):-position.top;setPositionProperty(value,"slide",slider.settings.speed)}}},el.goToNextSlide=function(){if(slider.settings.infiniteLoop||!slider.active.last){var pagerIndex=parseInt(slider.active.index)+1;el.goToSlide(pagerIndex,"next")}},el.goToPrevSlide=function(){if(slider.settings.infiniteLoop||0!=slider.active.index){var pagerIndex=parseInt(slider.active.index)-1;el.goToSlide(pagerIndex,"prev")}},el.startAuto=function(preventControlUpdate){slider.interval||(slider.interval=setInterval(function(){"next"==slider.settings.autoDirection?el.goToNextSlide():el.goToPrevSlide()},slider.settings.pause),slider.settings.autoControls&&1!=preventControlUpdate&&updateAutoControls("stop"))},el.stopAuto=function(preventControlUpdate){slider.interval&&(clearInterval(slider.interval),slider.interval=null,slider.settings.autoControls&&1!=preventControlUpdate&&updateAutoControls("start"))},el.getCurrentSlide=function(){return slider.active.index},el.getCurrentSlideElement=function(){return slider.children.eq(slider.active.index)},el.getSlideCount=function(){return slider.children.length},el.redrawSlider=function(){slider.children.add(el.find(".ui-clone")).width(getSlideWidth()),slider.viewport.css("height",getViewportHeight()),slider.settings.ticker||setSlidePosition(),slider.active.last&&(slider.active.index=getPagerQty()-1),slider.active.index>=getPagerQty()&&(slider.active.last=!0),slider.settings.pager&&!slider.settings.pagerCustom&&(populatePager(),updatePagerActive(slider.active.index))},el.destroySlider=function(){slider.initialized&&(slider.initialized=!1,$(".ui-clone",this).remove(),slider.children.each(function(){void 0!=$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!=$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),slider.controls.el&&slider.controls.el.remove(),slider.controls.next&&slider.controls.next.remove(),slider.controls.prev&&slider.controls.prev.remove(),slider.pagerEl&&slider.settings.controls&&slider.pagerEl.remove(),$(".ui-caption",this).remove(),slider.controls.autoEl&&slider.controls.autoEl.remove(),clearInterval(slider.interval),slider.settings.responsive&&$(window).unbind("resize",resizeWindow))},el.reloadSlider=function(settings){void 0!=settings&&(options=settings),el.destroySlider(),init()},init(),this}}(jQuery)},function(module,exports,__webpack_require__){__webpack_require__(0),__webpack_require__(1),__webpack_require__(2),__webpack_require__(4),$(function(){window.loadImage=function(obj){var img=new Image;if(img.src=obj.data("src"),img.src)return img.complete?void obj.attr("src",img.src):void(img.onload=function(){obj.attr("src",img.src)})}})},function(module,exports,__webpack_require__){__webpack_require__(0),__webpack_require__(1),__webpack_require__(2),__webpack_require__(5),$(document).ready(function(){var $sections=$("#J_redmi6aSpecs").find(".section");$sections.visibleWatcher({offset:300,onVisible:function(elm,index){$sections.filter(function(i){return i<=index+1}).addClass("preload").find("img").each(function(){window.loadImage($(this))})}});var $verPanel=$("#J_colorPreview li"),$verTab=$("#J_colorSwitch li"),initIndex=$verTab.eq(0).data("index");$verTab.removeClass("active").eq(0).addClass("active"),$verPanel.removeClass("active").eq(initIndex).addClass("active"),$verTab.on("click",function(){var $this=$(this);if(!$this.hasClass("active")){var index=$(this).data("index");$this.addClass("active").siblings().removeClass("active"),$verPanel.removeClass("active").eq(index).addClass("active")}})})},function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)}]);