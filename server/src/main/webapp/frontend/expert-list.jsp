<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
	<head>
        <base href="<%=basePath%>">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>中心简介  /  专家简介_河南省心电学诊疗中心</title>
		<meta name="keywords" content="">
		<meta name="description" content="">
		<link href="frontend/lib/css/css.css" rel="stylesheet" type="text/css">
		<script type="frontend/lib/js/jquery.min.js.下载"></script>
	</head>
	<body style="width: 1346px;">
		<script>
			$(document).ready(function(){
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
			});
		</script>
		<script>
		<!--
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
	</script>
﻿<div class="top">
  <div class="top_con">
    <div class="top_con_l float"> 欢迎光临河南省心电学诊疗中心! <%=basePath%></div>
    <div class="top_con_r"> <a href="http://www.hnsxdx.cn/zhuanjia/#" class="hrefs" onclick="this.style.behavior=&#39;url(#default#homepage)&#39;;this.setHomePage(&#39;http://www.hnsxdx.cn&#39;);">设为首页</a> | <a href="javascript:window.external.AddFavorite(&#39;http://www.hnsxdx.cn&#39;, &#39;河南省心电学诊疗中心&#39;)">加入收藏</a><a> <img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/2_04.jpg"> 微信平台 <img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/wei_1.jpg" class="weibo_img"> </a></div>
  </div>
</div>
<div class="header">
  <div class="header_con">
    <div class="logo float">
      <h1><a href="http://www.hnsxdx.cn/"></a></h1>
    </div>
    <div class="phone">
	<table border="0" align="left" cellspacing="0">
        <form name="formsearch" action="http://www.hnsxdx.cn/plus/search.php"></form>
          <tbody><tr>
            <td><input type="hidden" name="kwtype" value="0"></td>
            <td><input type="text" value="站内信息查询" onfocus="this.value=&#39;&#39;" name="q" class="input1"></td>
            <td><input type="image" src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/000.jpg" class="input2"></td>
          </tr>
        
      </tbody></table>
    </div>

  <div class="erweima"><img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/wei_1.jpg" width="100" height="130"></div>  </div>
</div>
<div class="nav">
  <div class="nav_con">
    <ul>
      <li class="cur_index"><a href="http://www.hnsxdx.cn/"></a></li>
      <li><a id="1" href="http://www.hnsxdx.cn/about/">中心简介</a>
	  <ul><li><a href="http://www.hnsxdx.cn/zhuanjia/">专家简介</a></li> <li><a href="http://www.hnsxdx.cn/linchuang/">心电检查介绍</a></li> <li><a href="http://www.hnsxdx.cn/en/">英文简介</a></li>  </ul>
	  </li><li><a id="30" href="http://www.hnsxdx.cn/gjyx/">国内外影响</a>
	  <ul><li><a href="http://www.hnsxdx.cn/lingxian/">国内外领先方向</a></li> <li><a href="http://www.hnsxdx.cn/yingxiang/">国内外知名度</a></li> <li><a href="http://www.hnsxdx.cn/jiaoliu/">国内外交流</a></li>  </ul>
	  </li><li><a id="9" href="http://www.hnsxdx.cn/xueshu/">学术动态</a>
	  <ul><li><a href="http://www.hnsxdx.cn/xdxzs/">心电学之声</a></li> <li><a href="http://www.hnsxdx.cn/jiaoyu/">继续教育</a></li>  </ul>
	  </li><li><a id="15" href="http://www.hnsxdx.cn/xiazai/">课件下载</a>
	  <ul> </ul>
	  </li><li><a id="14" href="http://www.hnsxdx.cn/kepu/">科普知识</a>
	  <ul> </ul>
	  </li><li><a id="5" href="http://www.hnsxdx.cn/jinzhan/">仪器进展</a>
	  <ul> </ul>
	  </li><li><a id="24" href="http://www.hnsxdx.cn/shipin/">视频专区</a>
	  <ul> </ul>
	  </li><li><a id="7" href="http://www.hnsxdx.cn/contact/">联系我们</a>
	  <ul> </ul>
	  </li>
      <li id="cur_index2"><a href="http://search.hnsxdx.cn/search/index" target="_blank">我的心电图查询</a></li>
    </ul>
  </div>
</div>
<div class="special_con">
  <h2 class="news_con_h2">专家简介</h2>
  <ul class="special_ul">
    <li> <a href="http://www.hnsxdx.cn/zhuanjia/1937.html" title="河南省心电学诊疗中心主任委员、副主任委员简介/The chairman and vice chairman of " class="special_img"><img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/1-1601151P251120.jpg"></a>
      <div class="special_div">
        <h3><a href="http://www.hnsxdx.cn/zhuanjia/1937.html" title="河南省心电学诊疗中心主任委员、副主任委员简介/The chairman and vice chairman of ">河南省心电学诊疗中心主任委员、副主任委员简介/The chairman and vice chairman of </a></h3>
        <p>主任委员：李中健 李中健，教授、硕士生导师， 郑州大学第二附属医院心电图科科主任。中国心电信息学会 / 食管心脏电生理培训中心 / 心电图会诊中心副主任；河南省心电学诊疗中...</p>
        <div class="bottom"> <font>浏览量：191</font> <a href="http://www.hnsxdx.cn/zhuanjia/1937.html">更多详细&gt;&gt;</a> </div>
      </div>
    </li><li> <a href="http://www.hnsxdx.cn/zhuanjia/253.html" title="河南省心电学诊疗中心常务委员简介" class="special_img"><img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/1-160323142603b8.png"></a>
      <div class="special_div">
        <h3><a href="http://www.hnsxdx.cn/zhuanjia/253.html" title="河南省心电学诊疗中心常务委员简介">河南省心电学诊疗中心常务委员简介</a></h3>
        <p>T he s tanding c ommitteememberofEMC （排名不分先后） （HNXD-2001） 安晓飞，主治医师，河南省直第三人民医院功能科主任。河南省心电学诊疗中心常务委员。毕业于河南医科大学临床医学专业...</p>
        <div class="bottom"> <font>浏览量：200</font> <a href="http://www.hnsxdx.cn/zhuanjia/253.html">更多详细&gt;&gt;</a> </div>
      </div>
    </li><li> <a href="http://www.hnsxdx.cn/zhuanjia/1936.html" title="河南省心电学诊疗中心秘书长、副秘书长简介/The secretary general committee in EMC" class="special_img"><img src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/1-1601151P3202L.jpg"></a>
      <div class="special_div">
        <h3><a href="http://www.hnsxdx.cn/zhuanjia/1936.html" title="河南省心电学诊疗中心秘书长、副秘书长简介/The secretary general committee in EMC">河南省心电学诊疗中心秘书长、副秘书长简介/The secretary general committee in EMC</a></h3>
        <p>秘书长：李世锋 李世锋，副教授、副主任医师、硕士生导师，郑州大学第二附属医院心电图科秘书，中国共产党内科支部副书记。中国心电学会委员；中国心电图会诊中心副秘书长；河...</p>
        <div class="bottom"> <font>浏览量：194</font> <a href="http://www.hnsxdx.cn/zhuanjia/1936.html">更多详细&gt;&gt;</a> </div>
      </div>
    </li>
  </ul>
  <!--list-page--start-->
  <div class="dede_pages"><li><span class="pageinfo">共 <strong>1</strong>页<strong>3</strong>条记录</span></li>
</div>
  <!--list-page--end--> 
</div>

﻿<div class="footer">
  <div class="footer_con">
    <div class="logo2 float">
      <div class="right">
        <p> Copyright © 2010-2017  河南省心电学诊疗中心 版权所有<br>
          地址：郑州市金水区经八路2号，郑州大学第二附属医院门诊楼3楼心电图科 <br>邮箱：henanxindian@126.com 您好！您是本站第：<script src="./中心简介 _ 专家简介_河南省心电学诊疗中心_files/count.php" type="text/javascript" language="javascript"></script>8562969 位客人！<br>
      </p></div>
    </div>
    
  </div>
</div>

<script language="javascript">
var tips; 
var theTop = 100;
var old = theTop;
</script> 
</body>
</html>