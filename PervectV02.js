// megamenuid
var mql = window.matchMedia('screen and (min-width: 801px)');if (mql.matches){ $(document).ready(function(){var a=$(".mega_menu").offset().top,e=function(){var e=$(window).scrollTop();e>a?$(".mega_menu").addClass(" fixed-nav"):a>e&&$(".mega_menu").addClass("relative-nav").removeClass("fixed-nav")};e(),$(window).scroll(function(){e()})}); (function(e){var t=function(e,t){this.elem=e;this.settings=t;this.megaMenuHtml();this.ajaxcall=null;this.menulist=this.elem.find(".leftmenulist li a");this.menuHelper(this.elem);this.addEvents()};t.prototype={regex:{islabel:new RegExp("/search/label/","g"),issearch:new RegExp("[?&]q=","g"),labelsearch:new RegExp("(//[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?","g"),label:new RegExp("(//[^/]+)/search/label/([^/?&$]+)","g"),search:new RegExp("(//[^/]+)/search/?[?&]q=(.*)","g")},addEvents:function(){var t=this;this.menulist.hover(function(){if(e(this).data("menuloaded")!=="true"){t.li=e(this);t.url=t.li.attr("href");t.container=t.li.closest("ul").siblings("ul");t.hoverOver()}},function(){t.hoverOut()})},hoverOver:function(){var t=this;this.getAJAXUrl();if(!this.ajaxUrl)return;this.ajaxcall=e.ajax({type:"GET",url:t.ajaxUrl,dataType:"jsonp",data:t.ajaxData,beforeSend:function(){t.showLoader()},success:function(e){t.hideLoader();t.addArrow();t.showPosts(e)},error:function(e){t.showError(e)}})},hoverOut:function(){this.ajaxcall.abort();this.hideLoader()},getAJAXUrl:function(){if(this.url){var e=this;this.ajaxData={alt:"json","max-results":this.settings.postsNumber};this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.labelsearch,function(t,n,r,i){e.ajaxData.q=i;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)===-1?this.ajaxUrl=this.url.replace(this.regex.label,function(t,n,r){delete e.ajaxData.q;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)===-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.search,function(t,n,r){e.ajaxData.q=r;return[n,"/feeds/posts/default"].join("")}):this.ajaxUrl=!1}else this.ajaxUrl=!1},showLoader:function(){e("<span></span>",{"class":"loading-icon"}).appendTo(this.li.closest("li"))},hideLoader:function(){this.li.closest("li").find("span.loading-icon").remove()},showPosts:function(t){var n=this,r=[],i,s,o;t.feed.openSearch$totalResults.$t>0?e.each(t.feed.entry,function(t,u){i=u.title.$t;e.each(u.link,function(e,t){t.rel==="alternate"?s=t.href:s="#"});o=u.media$thumbnail?u.media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s72\-c\//,"/s202/"):n.settings.noThumbnail;r.push('<li><span class="thumb-container"><a title="',i,'" href="',s,'"><img alt="',i,'" src="',o,'" width="202" height="202"/><br />',i,"</a></span></li>")}):r.push("<h5>","No posts available.","</h5>");this.container.html(r.join(""));this.menulist.removeData("menuloaded");this.li.data("menuloaded","true")},showError:function(e){if(e.statusText==="error"){this.hideLoader();this.addArrow();this.container.html("<h5>Oops... Could not fetch the blog posts.</h5>")}},addArrow:function(){this.menulist.closest("li").find("span").remove();this.menulist.removeClass("hover-menu");this.li.addClass("hover-menu");e("<span></span>",{"class":"menu-icon"}).appendTo(this.li.closest("li"))},menuHelper:function(t){var n=this;t.find(">li").hover(function(){var t=e(this);t.find("a:first").addClass("hover-menu");var r=e(this).find("ul.leftmenulist li").height()*e(this).find("ul.leftmenulist li").length;t.find("ul.rightmenulist").css({"min-height":r+"px"});n.requestFirstAjax(t)},function(){e(this).find("a:first").removeClass("hover-menu")})},megaMenuHtml:function(){this.elem.find("ul ul").remove();this.elem.addClass("megamenuid").find(">li").find("ul:first").addClass("leftmenulist").wrap(e("<div></div>",{"class":this.settings.divClass}));e("ul.leftmenulist").after(e("<ul></ul>",{"class":"rightmenulist"}))},requestFirstAjax:function(e){e=e.find(".leftmenulist li:first-child a");this.url=e.attr("href");this.container=e.closest("ul").siblings("ul");this.li=e;this.hoverOver()}};e.fn.megaBloggerMenu=function(n){var r={postsNumber:4,divClass:"megasubmenu",postsClass:"rightmenulist",noThumbnail:"/default.png"},i=e.extend({},r,n);return this.each(function(){var n=new t(e(this),i)})}})(jQuery); jQuery(document).ready(function(e){e("#megamenuid").megaBloggerMenu({postsNumber:4,noThumbnail:"https://2.bp.blogspot.com/-Z7jG9iO9OTg/Vazz6YJnFQI/AAAAAAAALVs/wlSvXPgdDAo/s1600/no_image_available.png"})}); function addURL(n){$(n).attr("href",function(){return this.href+"?&max-results=7"})}; }; if (window.matchMedia("(max-width:800px)").matches){ $(".cssmenu ul ul li:odd").addClass("odd"),$(".cssmenu ul ul li:even").addClass("even"),$(".cssmenu > ul > li > a").click(function(){$(".cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($(".cssmenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length}),$(function(){$(".menu_mobile_burger").click(function(){$("#css-menu").css({right:"0"});var s=document.body;s.classList.toggle("flow")}),$(".close-menu").click(function(){$("#css-menu").css({right:"100%"});var s=document.body;s.classList.toggle("flow")})}); };


// navsidebar
function myFunction1() {
   var element = document.getElementById("side-bar");
   element.classList.toggle("mystyle");
   var element = document.getElementById("sidebar-mask");
   element.classList.toggle("open");
  var body = document.body;
  body.classList.toggle("flow");
}
// related post
var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Related Posts:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:4,summaryLength:370,titleLength:"auto",thumbnailSize:200,noImage:"https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s218/nothumb_large.png",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span class="bg_overlay"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);



// Multi tab mpdc jQuery(document).ready(function($){ $(".multitab-widget-content-widget-id").hide(); $("ul.multitab-widget-content-mpdc-id li:first a").addClass("multitab-widget-current").show(); $(".multitab-widget-content-widget-id:first").show(); $("ul.multitab-widget-content-mpdc-id li a").click(function() { $("ul.multitab-widget-content-mpdc-id li a").removeClass("multitab-widget-current a"); $(this).addClass("multitab-widget-current"); $(".multitab-widget-content-widget-id").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(); return false; }); });

// Multi tab widget jQuery(document).ready(function($){ $(".multitab-widget-content-widget-id").hide(); $("ul.multitab-widget-content-tabs-id li:first a").addClass("multitab-widget-current").show(); $(".multitab-widget-content-widget-id:first").show(); $("ul.multitab-widget-content-tabs-id li a").click(function() { $("ul.multitab-widget-content-tabs-id li a").removeClass("multitab-widget-current a"); $(this).addClass("multitab-widget-current"); $(".multitab-widget-content-widget-id").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(); return false; }); });

// back to top
function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var scrollY=0,distance=40,speed=24;

