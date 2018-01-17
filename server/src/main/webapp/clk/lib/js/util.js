
function initFrame(){
	var screen_width = window.screen.width;
	var body_width = window.document.body.clientWidth;
	if(body_width <= 1280){
    if(screen_width <= 1280){
        $('body').css('width','1280px');
    }else{
        $('body').css('width',screen_width);
    }
	}else {
    $('body').css('width',screen_width-20);
	}
}

 /*第一种形式 第二种形式 更换显示样式*/
function setTab(name,cursel,n){
 	for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con_"+name+"_"+i);
	  menu.className=i==cursel?"hover":"";
	  con.style.display=i==cursel?"block":"none";
	}
}
//-->
function addFavorite2() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
      window.external.AddToFavoritesBar(url, title); //IE8
    }
  	else if (document.all) {
		  try{
		  	window.external.addFavorite(url, title);
		  }catch(e){
		   	alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		  }
	  }
	  else if (window.sidebar) {
      window.sidebar.addPanel(title, url, "");
    }
    else {
	  	alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}

//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
  try{
    obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
  }
  catch(e){
    if(window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      }
      catch (e) {
        alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
      }
      var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
      prefs.setCharPref('browser.startup.homepage',vrl);
    }
  }
}

function initFloatTips() { 
	tips = document.getElementById('divQQbox');
	moveTips();
}
function moveTips() {
	var tt=50; 
	if (window.innerHeight) {
		pos = window.pageYOffset 
	}else if (document.documentElement && document.documentElement.scrollTop) {
		pos = document.documentElement.scrollTop 
	}else if (document.body) {
		pos = document.body.scrollTop; 
	}
		pos=pos-tips.offsetTop+theTop; 
		pos=tips.offsetTop+pos/10; 
	if (pos < theTop){
		pos = theTop;
	}
	if (pos != old) { 
		tips.style.top = pos+"px";
		tt=10; //alert(tips.style.top); 
	}
	old = pos;
	setTimeout(moveTips,tt);
}
initFloatTips();
if(typeof(HTMLElement)!="undefined") //firefox定义contains()方法，ie下不起作用
{ 
	HTMLElement.prototype.contains=function (obj) { 
	while(obj!=null&&typeof(obj.tagName)!="undefind"){
		if(obj==this) return true; 
			obj=obj.parentNode;
		} 
		return false; 
	}
}

