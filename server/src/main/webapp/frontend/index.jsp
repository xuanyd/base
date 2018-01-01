<%--
  Created by IntelliJ IDEA.
  User: xuan
  Date: 2017/12/24
  Time: 22:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html 
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>河南省心电学诊疗中心</title>
    <meta name="description" content="河南省心电学诊疗中心 口号：同参与 共交流 同快乐 共发展
河南省心电学诊疗中心 目标：坚持发展具有中国特色的心电学事业，使中国的心电学事业走向世界，并与国际心电同行互通、融合、促进、发展。
河南省心电学诊疗中心 宗旨：为心电工作者搭建多方位的学术、心理、文化、休闲平台，交流工作体会、畅谈生活感悟，舒缓精神压力，放飞快乐心情；同时也为患者进行诊疗和健康教育，为心电厂家与心电专家搭建沟通的桥梁。">
    <meta name="keywords" content="河南省心电学诊疗中心">
    <link href="frontend/lib/css/css.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="frontend/lib/js/jquery.min.js"></script>
    <style type="text/css">#kinMaxShow *{ margin:0;padding:0;} #kinMaxShow .KMSPrefix_kinMaxShow_image_box{width:100%;height:500px;position:relative;z-index:1;} #kinMaxShow .KMSPrefix_kinMaxShow_image_box .KMSPrefix_kinMaxShow_image_item{width:100%;height:500px;position:absolute;overflow:hidden;} #kinMaxShow .KMSPrefix_kinMaxShow_image_box .KMSPrefix_kinMaxShow_image_item a.KMSPrefix_kinMaxShow_coverlink{width:100%;height:500px;display:block;text-decoration:none;padding:0;margin:0;background:transparent;text-indent:0;outline:none;hide-focus:expression(this.hideFocus=true);} #kinMaxShow .KMSPrefix_kinMaxShow_button{right:10px;bottom:10px;;position:absolute;list-style:none;z-index:2;overflow:hidden;_zoom:1;}#kinMaxShow .KMSPrefix_kinMaxShow_button li{width:14px;height:14px;line-height:14px;font-size:10px;background:#cccaca;border:1px solid #ffffff;color:#666666;text-align:center;margin-right:8px;font-family:Verdana;float:left;;cursor:pointer;-webkit-text-size-adjust:none;}#kinMaxShow .KMSPrefix_kinMaxShow_button li.KMSPrefix_kinMaxShow_focus{background:#CC0000;border:1px solid #FF0000;color:#000000;;cursor:default;}
        </style>
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
    <%@ include file="common/header.jsp" %>
    <!--banner--con--start-->
    <div class="banner_div"> 
      <script type="text/javascript">
        $(function(){
          $("#kinMaxShow").kinMaxShow();
        });
       </script>
    <div id="kinMaxShow" 
         style="width: 100%; height: 500px; overflow: visible; position: relative; visibility: visible; display: block;">
        <div class="KMSPrefix_kinMaxShow_image_box">
          <div class="KMSPrefix_kinMaxShow_image_item" style="display: block; background: url(&quot;frontend/lib/images/53fef2fd60a3e.jpg&quot;) center center no-repeat; z-index: 1; opacity: 0;">
          </div>
          <div class="KMSPrefix_kinMaxShow_image_item" style="display: block; background: url(&quot;frontend/lib/images/53f1c1afa039c.jpg&quot;) center center no-repeat; z-index: 1; opacity: 0;">
          </div>
          <div class="KMSPrefix_kinMaxShow_image_item" style="display: block; background: url(&quot;frontend/lib/images/135BKT3b540315.jpg&quot;) center center no-repeat; z-index: 2; opacity: 1;">
          </div>
        </div>
        <ul class="KMSPrefix_kinMaxShow_button">
          <li class=""> </li><li class=""> </li>
          <li class="KMSPrefix_kinMaxShow_focus"> 
          </li>
        </ul>
      </div>
    </div>
<!--banner--con--end--> 
  <div class="main">
    <div class="clear"></div>
    <div class="main_con"> 
      <div id="hotpic">
        <div class="jiudian2">
        <h2>
          <span>
            <a href="http://www.hnsxdx.cn/tongzhi/" target="_blank">通知公告</a>
          </span>
          <a class="more" href="http://www.hnsxdx.cn/tongzhi/" target="_blank">查看更多</a>
        </h2>
        <ul>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/tongzhi/2017/0803/2735.html" target="_blank">（通知+课程）第12届全国心电学进展及心电散点图临床应</a>
          </li>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/plus/view.php?aid=2359" target="_blank">《河南省心电学重点学科》提高班通知</a>
          </li>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/tongzhi/2016/0907/2154.html" target="_blank">2016中原心脏病学大会暨中原国际长城心脏病学大会通知</a>
          </li>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/tongzhi/2016/0907/2151.html" target="_blank">第十三届全国复杂疑难心电图高层阅图培训班通知</a>
          </li>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/tongzhi/2016/0907/2152.html" target="_blank">第十三届全国复杂疑难心电图高层阅图培训班通知</a>
          </li>
          <li style="border-top:dashed 0px #ddd !important;">
            <a href="http://www.hnsxdx.cn/tongzhi/2016/0829/2140.html" target="_blank">全国第十三届复杂疑难心电图高层阅图提高班与阅图经验</a>
          </li>
        </ul>
      </div>
    </div>
    <!--选下卡开始-->
    <div class="xuanxiaka float">
      <div id="Tab1">
        <div class="Menubox">
          <ul>
            <li class="hover"><a href="http://www.hnsxdx.cn/imgnews/">中心新闻</a></li>
          </ul>
        <a class="more" href="http://www.hnsxdx.cn/imgnews/" target="_blank">查看更多</a>
        </div>
        <div class="Contentbox">
          <div class="hover"> <h2><span>2017-12-27</span><a href="http://www.hnsxdx.cn/imgnews/2777.html">青年文明号至衡水市故城县医院进行学术交流</a></h2>
            <p>2017年12月26日-27日，郑州大学第二附属医院心电图科李世锋主任及河南省青年文明号号长申继红博士来到河北省衡水市故城县医院，...</p>

            <ul>
              <li><span>2017-12-22</span><a href="http://www.hnsxdx.cn/imgnews/2776.html" title="2017西部心电新技术高端论坛暨SynEci18技术研讨会">2017西部心电新技术高端论坛暨SynEci18技术研讨会</a></li>
<li><span>2017-12-11</span><a href="http://www.hnsxdx.cn/imgnews/2774.html" title="河南主持月视频合辑——2017年11月中国心电YY语音">河南主持月视频合辑——2017年11月中国心电YY语音</a></li>
<li><span>2017-12-11</span><a href="http://www.hnsxdx.cn/imgnews/2772.html" title="“青年文明号”走进基层--中牟县义诊">“青年文明号”走进基层--中牟县义诊</a></li>
<li><span>2017-12-11</span><a href="http://www.hnsxdx.cn/imgnews/2773.html" title="精彩11月！河南团队YY课堂展风采！">精彩11月！河南团队YY课堂展风采！</a></li>
<li><span>2017-12-05</span><a href="http://www.hnsxdx.cn/imgnews/2771.html" title="陕西省宝鸡市人民医院考察团到访郑州大学第二">陕西省宝鸡市人民医院考察团到访郑州大学第二</a></li>
<li><span>2017-11-14</span><a href="http://www.hnsxdx.cn/imgnews/2768.html" title="远程网络心电图走基层进万家">远程网络心电图走基层进万家</a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--选下卡开始end--> 
    <!--start-->
    <div class="jiudian">
      <h2><span><a href="http://www.hnsxdx.cn/bbs/forum.php?mod=forumdisplay&amp;fid=2" target="_blank">医师会诊中心[点击]</a></span></h2>
      <p></p><div style="text-align:center;">
<object id="bcastr4" data="./河南省心电学诊疗中心_files/xixi.swf.下载" type="application/x-shockwave-flash" width="200" height="95">
    <param name="movie" value="/skin/swf/xixi.swf?xml=/skin/xml/huizhen.xml">
</object>
</div><p></p>
<h2><span><a href="http://www.hnsxdx.cn/bbs/forum.php?mod=forumdisplay&amp;fid=38" target="_blank">患者咨询中心[点击]</a></span></h2>
<p>
</p><div style="text-align:center;">
<object id="bcastr4" data="./河南省心电学诊疗中心_files/xixi.swf(1).下载" type="application/x-shockwave-flash" width="200" height="95">
    <param name="movie" value="/skin/swf/xixi.swf?xml=/skin/xml/lanren.xml">
</object>
</div>
    <p></p>           
    </div>
  </div>
  <!--end-->
  
  <div class="clear"></div>
  <div class="youshi">
    <div class="link">
      <div id="Tab2">
        <div class="Menubox2">
          <ul>
            <li id="a1" onmouseover="setTab(&#39;a&#39;,1,3)" class="hover">友情链接</li>
          </ul>
        </div>
        <div class="Contentbox2">
          <div id="con_a_1" class="hover">
            <ul>
              <li class="li7">  <a href="http://www5.zzu.edu.cn/xdxyjs/" target="_blank">郑州大学心电学研究所</a>     <a href="http://www.zzusah.com/" target="_blank">郑州大学第二附属医院</a>     <a href="http://www.besthealth.com.cn/index.html" target="_blank">百誉健康</a>     <a href="http://www.ceheart.com/" target="_blank">中国心电学网</a>     <a href="http://www.dxy.cn/" target="_blank">丁香园</a>     <a href="http://www.365heart.com/" target="_blank">365心血管网</a>     <a href="http://www.hn-eecp.com/" target="_blank">心血管康复与体外反搏网</a>     <a href="http://www.yywsb.com/" target="_blank">医药卫生网</a>     <a href="http://www.cma.org.cn/" target="_blank">中华医学会</a>   </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<%@ include file="common/footer.jsp" %>
<script language="javascript">
  var tips; 
  var theTop = 100;
  var old = theTop;
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
      if(obj==this) 
        return true; 
      obj=obj.parentNode;
    } 
      return false; 
    }
  }
</script> 
<!--kefu--end-->
</body>
</html>