(function(t,a){function e(){var t=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],a=!1
for(i in t)navigator.userAgent.split(t[i]).length>1&&(a=!0)
return a}function o(e){e.find(".show_on_hover, .hovercover").each(function(){var i=t(this).closest("li")
e.data("ie9")||e.data("ie")?t(this).animate({opacity:0},{duration:200,queue:!1}):t(this).transit({opacity:0},{duration:200,queue:!1}),i.hover(function(){t(this).find(".show_on_hover, .hovercover").each(function(){var i=1
t(this).data("maxopacity")!=a&&(i=t(this).data("maxopacity")),e.data("ie9")||e.data("ie")?t(this).animate({opacity:i},{duration:200,queue:!1}):t(this).transit({opacity:i},{duration:200,queue:!1})})},function(){t(this).find(".show_on_hover, .hovercover").each(function(){e.data("ie9")||e.data("ie")?t(this).animate({opacity:0},{duration:200,queue:!1}):t(this).transit({opacity:0},{duration:200,queue:!1})})})})}function n(a,e){a.find(".excerpt").each(function(){var a=t(this)
a.closest("li").hover(function(){a.slideDown(300)},function(){a.stop(!0),a.slideUp(300)})}),a.find(".reveal_opener").each(function(){var i=t(this)
i.click(function(){if(i.parent().hasClass("reveal_container"))var o=i.parent()
else o=i.parent().find(".reveal_container")
o.hasClass("revactive")?(o.removeClass("revactive"),i.removeClass("revactive"),o.closest("li").removeClass("revactive"),a.data("ie9")||a.data("ie")?o.find(".reveal_wrapper").css({visibility:"visible"}).animate({height:"0px",opacity:0},{duration:500}):o.find(".reveal_wrapper").css({visibility:"visible"}).transit({height:"0px",opacity:0},{duration:500}),o.find(".sb-vimeo-markup, .sb-yt-markup").html(""),o.hasClass("tofullwidth")&&(f(200,a,e),setTimeout(function(){o.appendTo(o.data("comefrom"))},300))):(o.hasClass("tofullwidth")&&(o.data("comefrom",o.parent()),o.data("indexli",o.closest("li").index()),o.appendTo(o.closest(".showbiz")),i.addClass("revactive")),setTimeout(function(){"on"==a.data("coo")&&o.closest("ul").find(".reveal_opener").each(function(a){t(this).hasClass("revactive")&&t(this).click()}),o.addClass("revactive"),i.addClass("revactive"),o.closest("li").addClass("revactive"),a.data("ie9")||a.data("ie")?o.find(".reveal_wrapper").css({visibility:"visible"}).animate({height:"100%",opacity:1},{duration:300}):o.find(".reveal_wrapper").css({visibility:"visible"}).transit({height:"100%",opacity:1},{duration:300}),o.find(".sb-vimeo-markup, .sb-yt-markup").each(function(e){var i=t(this)
if(i.hasClass("sb-vimeo-markup"))var o=a.data("vimeomarkup")
else o=a.data("ytmarkup")
var n=o.split("%%videoid%%")[0],d=o.split("%%videoid%%")[1]
o=n+i.data("videoid")+d
i.append(o)
try{i.fitVids()}catch(t){}}),setTimeout(function(){d(a,e)},500)},100))})})}function d(t,e){var i=t.find(".tofullwidth.revactive .heightadjuster"),o=e.find("ul").first(),n=parseInt(i.parent().css("paddingTop"),0)+parseInt(i.parent().css("paddingBottom"),0),d=0
t.data("hboffset")!=a&&(d=t.data("hboffset"))
var r=d+n+i.outerHeight(!0)
t.data("ie9")||t.data("ie")?(o.animate({height:r+"px"},{duration:300,queue:!1}),o.parent().animate({height:r+"px"},{duration:300,queue:!1})):(o.transit({height:r+"px",duration:300,queue:!1}),o.parent().transit({height:r+"px",duration:300,queue:!1}))}function r(a,e){var i,o=a.data("carousel"),n=t(e.data("left")),d=t(e.data("right"))
a.width()
n.data("teaser",e),d.data("teaser",e),e.data("offset",0),f(0,a,e),a.find("img").each(function(){t(this).parent().waitForImages(function(){f(200,a,e)})}),d.click(function(){if(a.find(".tofullwidth.revactive .heightadjuster").length>0){var e=a.find(".tofullwidth.revactive").data("indexli")+2
e>a.find("ul:first-child li").length&&(e=1),a.find(".tofullwidth.revactive").addClass("sb-removemesoon"),setTimeout(function(){a.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click(),a.find(".sb-removemesoon").each(function(){t(this).removeClass("sb-removemesoon")})},350),a.find("ul:first-child li:nth-child("+e+")").find(".reveal_opener").click()}else if(1!=d.data("inmove")){var i=t(t(this).data("teaser")),n=i.find("ul").first()
n.find(">li").length
if("on"==a.data("das"))s(a,1)
else{var r=n.find(">li:first-child").offset().left
if(1==o&&r<0)d.data("inmove",1),i.data("offset",i.data("offset")-1),f(0,a,i),n.find(">li:first-child").appendTo(n),i.data("offset",i.data("offset")+1),f(200,a,i),setTimeout(function(){d.data("inmove",0)},350)
else{d.data("inmove",1)
var l=1,c=a.width()
"on"==a.data("allentry")&&(c>980&&(l=a.data("vea")[0]),c<981&&c>768&&(l=a.data("vea")[1]),c<769&&c>420&&(l=a.data("vea")[2]),c<421&&(l=a.data("vea")[3])),i.data("offset",i.data("offset")+l),f(200,a,i),setTimeout(function(){d.data("inmove",0)},350)}}}return!1}),n.click(function(){if(a.find(".tofullwidth.revactive .heightadjuster").length>0){var e=a.find(".tofullwidth.revactive").data("indexli")-1
e<=0&&(e=a.find("ul:first-child li").length),a.find(".tofullwidth.revactive").addClass("sb-removemesoon"),setTimeout(function(){a.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click(),a.find(".sb-removemesoon").each(function(){t(this).removeClass("sb-removemesoon")})},350),a.find("ul:first-child li:nth-child("+e+")").find(".reveal_opener").click()}else if(1!=n.data("inmove")){var i=t(this).data("teaser"),d=i.find("ul").first()
if("on"==a.data("das"))s(a,-1)
else{var r=d.find(">li:first-child").offset().left
if(1==o&&r>=0)n.data("inmove",1),i.data("offset",i.data("offset")+1),f(0,a,i),d.find(">li:last-child").prependTo(d),i.data("offset",i.data("offset")-1),f(200,a,i),setTimeout(function(){n.data("inmove",0)},350)
else{n.data("inmove",1)
var l=1,c=a.width()
"on"==a.data("allentry")&&(c>980&&(l=a.data("vea")[0]),c<981&&c>768&&(l=a.data("vea")[1]),c<769&&c>420&&(l=a.data("vea")[2]),c<421&&(l=a.data("vea")[3])),i.data("offset",i.data("offset")-l),f(200,a,i),setTimeout(function(){n.data("inmove",0)},350)}}}return!1}),"on"!=a.data("das")&&a.swipe({data:a,swipeRight:function(){n.click()},swipeLeft:function(){d.click()},excludedElements:".reveal_opener, a,  .linkicon, .notalone, .lupeicon, .hovercover, .showbiz-navigation, .sb-navigation-left, .sb-navigation-right",allowPageScroll:"auto"}),t(window).resize(function(){clearTimeout(i),i=setTimeout(function(){e.data("offset",0),f(0,a,e),"on"==a.data("das")&&setTimeout(function(){s(a,0)},300)},150)}),1==o&&(d.data("inmove",1),n.data("inmove",1))
for(var r=0;r<3;r++)t(window).data("teaserreset",setTimeout(function(){f(200,a,e)},500*r)),2==r&&setTimeout(function(){d.data("inmove",0),n.data("inmove",0)},500*r+200)}function s(a,e){var i=a,o=a.width(),n=i.find("ul").first(),d=n.find(">li").length,r=4
o>980&&(r=a.data("vea")[0]),o<981&&o>768&&(r=a.data("vea")[1]),o<769&&o>420&&(r=a.data("vea")[2]),o<421&&(r=a.data("vea")[3])
var s=d-r,f=n.find(">li:first-child").outerWidth(!0),l=i.find(".overflowholder"),c=l.scrollLeft(),h=Math.round(c/f),u=t(l.parent().data("right")),v=t(l.parent().data("left")),m=(h+e)*f
if(m>=s*f){m=s*f
try{u.addClass("notclickable")}catch(t){}}else try{u.removeClass("notclickable")}catch(t){}if(m<=0){m=0
try{v.addClass("notclickable")}catch(t){}}else try{v.removeClass("notclickable")}catch(t){}l.animate({scrollLeft:m+"px"},{duration:300,queue:!1,complete:function(){l.removeClass("inmove")}})}function f(e,i,o){var n=i.data("carousel"),r=o.find("ul"),s=o.data("offset"),f=i.width()
f-=parseInt(o.css("paddingLeft"),0)+parseInt(o.css("paddingRight"),0)
r=o.find("ul:first")
maxitem=r.find(">li").length
var l=t(o.data("right"))
"on"!=i.data("das")&&l.removeClass("notclickable")
var c=t(o.data("left"))
"on"!=i.data("das")&&c.removeClass("notclickable")
var h=i.data("vea")[0],u=i.data("mediaMaxHeight")
if(f>980){h=i.data("vea")[0]
try{0!=u[0]&&i.find(".mediaholder_innerwrap").each(function(){t(this).css({maxHeight:u[0]+"px"})})}catch(t){}}if(f<981&&f>768){h=i.data("vea")[1]
try{0!=u[1]&&i.find(".mediaholder_innerwrap").each(function(){t(this).css({maxHeight:u[1]+"px"})})}catch(t){}}if(f<769&&f>420){h=i.data("vea")[2]
try{0!=u[2]&&i.find(".mediaholder_innerwrap").each(function(){t(this).css({maxHeight:u[2]+"px"})})}catch(t){}}if(f<421){h=i.data("vea")[3]
try{0!=u[3]&&i.find(".mediaholder_innerwrap").each(function(){t(this).css({maxHeight:u[3]+"px"})})}catch(t){}}1!=n&&(s>=maxitem-h&&(s=maxitem-h,"on"!=i.data("das")&&l.addClass("notclickable")),s<=0&&(s=0,"on"!=i.data("das")&&c.addClass("notclickable")))
var v=r.find(">li:first-child").outerWidth(!0)-r.find(">li:first-child").width(),m=0
i.data("eoffset")!=a&&(m=i.data("eoffset")*(h-1))
i.data("croffset")!=a&&i.data("croffset"),step=(f-(h-1)*v)/h,step=Math.round(step-m),o.data("offset",s),r.find(">li").each(function(){t(this).width(step)}),step=r.find("li:first").outerWidth(!0),o.data("step",step),r.css({width:"10000px"}),0==e?r.css({left:0-step*s+"px"}):r.animate({left:0-step*s+"px"},{duration:e,queue:!1})
var p=0
i.data("hboffset")!=a&&(p=i.data("hboffset")),setTimeout(function(){var a=0
r.find("li").each(function(){t(this).outerHeight(!0)>a&&(a=t(this).outerHeight(!0))}),setTimeout(function(){if(step>100){var t=r.find(">li:last-child"),a=t.position().left+t.outerWidth(!0)+v+1
r.css({width:a+"px"})}},200),i.find(".tofullwidth.revactive .heightadjuster").length>0?d(i,o):i.data("ie9")||i.data("ie")?(r.animate({height:a+p+"px"},{duration:300,queue:!1}),r.parent().animate({height:a+p+"px"},{duration:300,queue:!1})):(r.transit({height:a+p+"px",duration:300,queue:!1}),r.parent().transit({height:a+p+"px",duration:300,queue:!1}))},e+210)}t.fn.extend({showbizpro:function(a){return t.fn.showbizpro.defaults={entrySizeOffset:0,containerOffsetRight:0,heightOffsetBottom:0,carousel:"off",visibleElementsArray:[4,3,2,1],mediaMaxHeight:[0,0,0,0],ytMarkup:"<iframe src='http://www.youtube.com/embed/%%videoid%%?hd=1&wmode=opaque&autohide=1&showinfo=0&autoplay=1'></iframe>",vimeoMarkup:"<iframe src='http://player.vimeo.com/video/&&videoid%%?title=0&byline=0&portrait=0;api=1&autoplay=1'></iframe>",closeOtherOverlays:"off",allEntryAtOnce:"off",dragAndScroll:"off"},a=t.extend({},t.fn.showbizpro.defaults,a),this.each(function(){var i=t(this)
i.data("eoffset",a.entrySizeOffset),i.data("croffset",a.containerOffsetRight),i.data("hboffset",a.heightOffsetBottom),"on"==a.carousel?i.data("carousel",1):i.data("carousel",0),i.data("ytmarkup",a.ytMarkup),i.data("vimeomarkup",a.vimeoMarkup),i.data("vea",a.visibleElementsArray),i.data("coo",a.closeOtherOverlays),i.data("allentry",a.allEntryAtOnce),i.data("mediaMaxHeight",a.mediaMaxHeight),i.data("das",a.dragAndScroll),i.data("ie",!t.support.opacity),i.data("ie9",9==document.documentMode),t.support.transition||(t.fn.transition=t.fn.animate)
var d,f=i.find(".showbiz")
f.attr("id","sbiz"+Math.round(1e4*Math.random())),"on"==a.dragAndScroll&&f.find(".overflowholder").overscroll({driftTimeout:0,direction:"horizontal",wheelDirection:"horizontal",captureWheel:!1}).on("overscroll:dragstart",function(){i.find(".overflowholder").stop(!0)}).on("overscroll:driftend",function(){i.find(".overflowholder").data("drifting",0),s(i,0)}).on("overscroll:driftstart",function(){clearTimeout(d),i.find(".overflowholder").data("drifting",1)}).on("overscroll:dragend",function(){e()||(clearTimeout(d),d=setTimeout(function(){1!=i.find(".overflowholder").data("drifting")&&s(i,0)},50))}),r(i,f),n(i,f)
try{i.find(".mediaholder_innerwrap").each(function(){t(this).fitVids()})}catch(t){}o(i),(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&t(".reveal_opener, .sb-navigation-left, .sb-navigation-right").click(function(){})})},showbizredraw:function(a){return this.each(function(){var a=t(this),e=a.find(".showbiz")
f(200,a,e)})}})})(jQuery)
