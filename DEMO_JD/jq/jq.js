var t = n =0, count;
$(document).ready(function(){ 
count=$("#banner_list a").length;
$("#banner_list a:not(:first-child)").hide();
$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
$("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
$("#banner li").click(function() {
var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
n = i;
if (i >= count) return;
$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
$("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
document.getElementById("banner").style.background="";
$(this).toggleClass("on");
$(this).siblings().removeAttr("class");
});
t = setInterval("showAuto()", 2000);
$("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});
})

function showAuto()
{
n = n >=(count -1) ?0 : ++n;
$("#banner li").eq(n).trigger('click');
}
$(document).ready(function(){
	//滚动条发生滚动
     $(window).scroll(function(){
     //在这里，我们做一些事情
     var top=$(document).scrollTop();
     var menu=$("#menu_left");
     var items=$("#content").find(".item");
     var currentId="";//当前所在楼层(item)id
     var toUp=$("#toUp");

     if(top>90)
     {
     	menu.css({"display":"block"})
     	toUp.css({"opacity":"1"})
     }
     else
     {
     	menu.css({"display":"none"})
     	toUp.css({"opacity":"0"})
     }
     
     items.each(function(){
     	var m=$(this);
     	var itemTop=m.offset().top;
     	//console.log(itemTop)
     	if(top>itemTop-600)
     	{
          currentId="#"+m.attr("id"); 
     	}
     	else
     	{
          return false;
     	}
     	$("#menu_left li").mouseover(function(){
     		$(this).css({"background-color":"#c81623"})
     		
     	});
     	$("#menu_left li").mouseout(function(){
     		$(this).css({"background-color":"#FFF"})
     	});
     });
     /*$("#menu ul li").mouseover(function(){
      $("#menu ul li").each(function(){

      })
     })*/
     var currentLink=menu.find(".Current");
     if(currentId&&currentLink.attr("href")!=currentId)
     {
     	currentLink.removeClass("Current");
     	menu.find("[href="+currentId+"]").addClass("Current");
     }

     });

	});