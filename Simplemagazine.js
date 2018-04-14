jQuery(document).ready(function($){
	
	"use strict";

	// Attach + To Top Menu
	$('#top-nav .menu-item-has-children > a, #main-nav ul li ul .menu-item-has-children > a').append(' +');

	// Attach Arrow To Main Menu
	$('#main-nav .menu-item-has-children > a').append('<span class="menu-arrow"></span>');
	
	// Prepend Menu Icons
	$('#logo').after('<div id="menu-icon"></div>');

	$('#top-nav .wrapper').append('<div id="top-menu-icon"></div>');
	
	// Toggle Nav
	$('#menu-icon').on('click', function(){
		$('#main-nav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#main-nav');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	$('#top-menu-icon').on('click', function(){
		$('#top-nav ul').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#top-nav ul');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});
});

var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Related Posts:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:4,summaryLength:370,titleLength:"auto",thumbnailSize:200,noImage:"https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s218/nothumb_large.png",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span class="bg_overlay"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><div class="related-post-item-thumbnail"><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);

function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var scrollY=0,distance=40,speed=24;

var postperpage=22;
var numshowpage=6;
var upPageWord ='<i class="fa fa-chevron-left"></i>';
var downPageWord ='<i class="fa fa-chevron-right"></i>';
var urlactivepage=location.href;
var home_page="/";

a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') {
_str = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://2.bp.blogspot.com/-Ph2wxEvy2mc/UTIr8-fdHjI/AAAAAAAABAo/3use2PsPhMA/s1600/taunt.gif' alt='' class='smiley'/>");
_str = _str.replace(/=d&gt;/gi, "<img src='http://1.bp.blogspot.com/-8C5UH12mxf0/UTIzmsxczDI/AAAAAAAABDA/2seHdqLVQ6Q/s1600/suicide.gif' alt='' class='smiley'/>");
_str = _str.replace(/:d/gi, "<img src='http://4.bp.blogspot.com/-lhTywmMZ58E/UTI04kjJ3WI/AAAAAAAABDY/qNgtijEr_E8/s1600/biggrin.gif' alt='' class='smiley'/>");
_str = _str.replace(/:p/gi, "<img src='http://1.bp.blogspot.com/-gG_Wn6D6Ux4/UTIyqFyfKbI/AAAAAAAABCo/qEmU8s8ndVI/s1600/tongue.gif' alt='' class='smiley'/>");
_str = _str.replace(/:\(\(/gi, "<img src='http://3.bp.blogspot.com/-pcE-4ot-gjk/UTIsLRff6SI/AAAAAAAABAw/LYvZ8__88Ak/s1600/cry2.gif' alt='' class='smiley'/>");
_str = _str.replace(/:\)/gi, "<img src='http://4.bp.blogspot.com/-k4ujC23cSgI/UTIq7eUkmuI/AAAAAAAABAQ/YUNL9_RhDB0/s1600/smile3.gif' alt='' class='smiley'/>");
_str = _str.replace(/:\(/gi, "<img src='http://2.bp.blogspot.com/-XSBJ7zBZKZs/UTIrT-hMYyI/AAAAAAAABAY/6B26_8Ttwj4/s1600/sad.gif' alt='' class='smiley'/>");
_str = _str.replace(/:-\?/gi, "<img src='http://1.bp.blogspot.com/-TSIzPWeGBwk/UTI0S-nw5tI/AAAAAAAABDQ/xyHPCFZH4fI/s1600/think.gif' alt='' class='smiley'/>");
_str = _str.replace(/d\(/gi, "<img src='http://3.bp.blogspot.com/-qlyn_deOhFw/UTIzY8aRgqI/AAAAAAAABC4/pfSojMdD33s/s1600/doh.gif' alt='' class='smiley'/>");
_str = _str.replace(/:-o/gi, "<img src='http://3.bp.blogspot.com/-Zb5g0OWHx4c/UTIsuPLt90I/AAAAAAAABA4/cmP1ltBmVF0/s1600/shock.gif' alt='' class='smiley'/>");
_str = _str.replace(/:-f/gi, "<img src='http://4.bp.blogspot.com/-SpvC8mHHwhg/UTIzQMUVGKI/AAAAAAAABCw/_NKKVyQtulk/s1600/flowers1.gif' alt='' class='smiley'/>");
_str = _str.replace(/:-ss/gi, "<img src='http://1.bp.blogspot.com/-qpnD1BYon5w/UTI0AIeKX6I/AAAAAAAABDI/HsllV7NYTqk/s1600/unsure.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/b-\(/gi, "<img src='http://3.bp.blogspot.com/-h4yNmhdKUVU/UTIwUKpvVOI/AAAAAAAABCY/B0FEZVRGHe4/s1600/threaten.gif' alt='' class='smiley'/>");
_str = _str.replace(/h-\(/gi, "<img src='http://4.bp.blogspot.com/-veVoDPEc7I4/UTIv9wCS0jI/AAAAAAAABCQ/4c5FgCHAiU4/s1600/help.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/g-\)/gi, "<img src='http://2.bp.blogspot.com/-_ttAcnBbAaw/UTIvKtxfWvI/AAAAAAAABCA/X2JLEShhOQU/s1600/good.gif' alt='' class='smiley'/>");
_str = _str.replace(/5-\p/gi, "<img src='http://2.bp.blogspot.com/--o9jZ1nMcec/UTIuyCBgS_I/AAAAAAAABB4/Jf03oz5yKrU/s1600/beee.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/y-\)/gi, "<img src='http://2.bp.blogspot.com/-6-BTJcVpwY0/UTIvhF_PL-I/AAAAAAAABCI/SS-LDADTSls/s1600/yahoo.gif' alt='' class='smiley'/>");
_str = _str.replace(/c-\)/gi, "<img src='http://3.bp.blogspot.com/-khAwhIYbgvQ/UTItD_PfNyI/AAAAAAAABBI/HMpRMQh5Uak/s1600/crazy.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/s-\)/gi, "<img src='http://2.bp.blogspot.com/-fsTXhXl10Gg/UTIs7Ll01AI/AAAAAAAABBA/QkWgWAAFG3g/s1600/spiteful.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/d-\)/gi, "<img src='http://2.bp.blogspot.com/-CIuUuJeuyGI/UTIueHgTxOI/AAAAAAAABBo/BzXkTEEDlhw/s1600/drinks.gif' alt='' class='smiley'/>");
_str = _str.replace(/w-\)/gi, "<img src='http://2.bp.blogspot.com/-Mc5ed3Ymk7s/UTI1GIXMAMI/AAAAAAAABDg/PyDOfoXgsl0/s1600/cheer.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:-\h/gi, "<img src='http://2.bp.blogspot.com/-JOgaMRI61Jk/UTItsGc5KdI/AAAAAAAABBY/6UDCabfZQbg/s1600/hi+2.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:X/gi, "<img src='http://2.bp.blogspot.com/-wmOB_Z6LPp4/UTIt9FhZiwI/AAAAAAAABBg/7VoefgIQjEs/s1600/give_heart.gif' alt='' class='smiley'/>");
_str = _str.replace(/:\-\*/gi, "<img src='http://2.bp.blogspot.com/-H4e_O5BFVP8/UTIumwhVmKI/AAAAAAAABBw/SKhY4DDxKkk/s1600/air_kiss.gif' alt='' class='smiley'/>");
_str = _str.replace(/=\)\)/gi, "<img src='http://1.bp.blogspot.com/-lNNTReQVc0A/UTIrjDhVLAI/AAAAAAAABAg/BsVMYnr54pI/s1600/rofl.gif' alt='' class='smiley'/>");
b.item(i).innerHTML = _str;} } }

