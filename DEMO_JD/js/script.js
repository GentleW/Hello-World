window.onload=function()
    { 
      submenu();
      Consmove();
      //menuLeft();
      tabs();
      tabs2();
      tabs3();
      tabs4();
      //scroll();
      toUp();
      
    };

    //运动框架
 function getStyle(obj,name)
{
  if(obj.currentStyle)
  {
    return obj.currentStyle[name]
  }
  else
  {
    return getComputedStyle(obj,false)[name]
  }
}
function startMove(obj,json,fn)
{
  //var flag=true;
  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
    for(var attr in json)
    {
      var flag=true;
      var cur=0;
      if(attr=="opacity")
      {
        cur=Math.round(parseFloat(getStyle(obj,attr))*100);
      }
      else
      {
         cur=parseInt(getStyle(obj,attr));
      }
      var speed=(json[attr]-cur)/6;
      speed=speed>0?Math.ceil(speed):Math.floor(speed);
      if(cur!=json[attr])
      {
        flag=false;
      }
      if(attr=="opacity")
      {
        obj.style.filter='alpha(opacity:'+(cur+speed)+')';
        obj.style.opacity=(cur+speed)/100;
      }
      else
      {
        obj.style[attr]=cur+speed+'px';
      }
    }
    if(flag)
    {
      clearInterval(obj.timer);
      if(fn)
      {
        fn()
      }
    }
  },30)
}
//运动框架结束
    function submenu()
    {  
      var Lis=document.getElementById("Menu").getElementsByTagName("ul")[0].getElementsByTagName('li');
      for (var i = 0; i < Lis.length; i++) {
        Lis[i]=i;
          Lis[i].onmouseover=function()
          {
            this.className='lihover'
            var h0=(this.i-1)*30+42;
            var y=this.getElementsByTagName('div')[0].offsetHeight;
            var h=this.getElementsByTagName('div')[0].style.top+y;
            if(h<h0)
            {
                this.getElementsByTagName('div')[0].style.top=h0+'px';
            }
            if(y>550)
            {
                 this.getElementsByTagName('div')[0].style.top='3px'
            }
          }
           Lis[i].onmouseout=function()
           {
            this.className='';
           }
      };
    };
    //动画
    function Consmove()
    {
        var oDiv=document.getElementById('main_right_down');
        var aLis=oDiv.getElementsByTagName('a');
        for (var i = 0; i < aLis.length; i++) {
          aLis[i].onmouseover=function()
          {
            var _this=this.getElementsByTagName('img')[0];
            startMove(_this,{top:-15,opacity:0},function()
            {
              _this.style.top=5+'px'
              startMove(_this,{top:5,opacity:100})
            })
          }
        }
    }
    //menu_left 部分
    /*function menuLeft()
   {
    var menuLeft=document.getElementById("menu_left");
    var oLia=menuLeft.getElementsByTagName("a");
    for (var i = 0; i < oLia.length; i++) {
       oLia[i].index=i;
         var arr=["服饰","美妆","手机","家电"];
         var arr2=["1F","2F","3F","4F"];
      oLia[i].onmouseover=function()
      {
        this.style.background="#c81623"
        this.style.color="#fff";
        this.innerHTML=arr[this.index]

      }
     oLia[i].onmouseout=function()
      {
        this.style.background="#fff";
         this.style.color="#656565";
        this.innerHTML=arr2[this.index]
      }
    }
   } */
   //tabs 部分
   function tabs()
   {
    var oLi=document.getElementById('item_mid_left').getElementsByTagName('li');
    var oDiv=document.getElementById('item_mid_right').getElementsByTagName('div');
     for (var i = 0; i < oLi.length; i++) {
       oLi[i].index=i;
       oLi[i].onmouseover=function()
       {
          for (var i = 0; i < oLi.length; i++) {
            oLi[i].className="";
            oDiv[i].style.display="none";
          }
          this.className="active";
          oDiv[this.index].style.display="block";
       }
     }
   }
   function tabs2()
   {
    var oLi=document.getElementById('item_mid_left2').getElementsByTagName('li');
    var oDiv=document.getElementById('item_mid_right2').getElementsByTagName('div');
     for (var i = 0; i < oLi.length; i++) {
       oLi[i].index=i;
       oLi[i].onmouseover=function()
       {
          for (var i = 0; i < oLi.length; i++) {
            oLi[i].className="";
            oDiv[i].style.display="none";
          }
          this.className="active";
          oDiv[this.index].style.display="block";
       }
     }
   }
   function tabs3()
   {
    var oLi=document.getElementById('item_mid_left3').getElementsByTagName('li');
    var oDiv=document.getElementById('item_mid_right3').getElementsByTagName('div');
     for (var i = 0; i < oLi.length; i++) {
       oLi[i].index=i;
       oLi[i].onmouseover=function()
       {
          for (var i = 0; i < oLi.length; i++) {
            oLi[i].className="";
            oDiv[i].style.display="none";
          }
          this.className="active";
          oDiv[this.index].style.display="block";
       }
     }
   }
   function tabs4()
   {
    var oLi=document.getElementById('item_mid_left4').getElementsByTagName('li');
    var oDiv=document.getElementById('item_mid_right4').getElementsByTagName('div');
     for (var i = 0; i < oLi.length; i++) {
       oLi[i].index=i;
       oLi[i].onmouseover=function()
       {
          for (var i = 0; i < oLi.length; i++) {
            oLi[i].className="";
            oDiv[i].style.display="none";
          }
          this.className="active";
          oDiv[this.index].style.display="block";
       }
     }
   }


   //scroll
   /*function getByclassName(obj,cls)
   {
  var elements=obj.getElementsByTagName("*");
  var result=[];
  for (var i = 0; i < elements.length; i++) {
    if(elements[i].className==cls)
    {
      result.push(elements[i])
    }
  }
  return result;
};
function hasClass(obj,cls)
{
   return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"))
};
function removeClass(obj,cls)
{
   if(hasClass(obj,cls))
   {
     var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");
     obj.className=obj.className.replace(reg," ")
   }
};
function addClass(obj,cls)
{
 if(!hasClass(obj,cls))
 {
   obj.className+=" "+cls;
 };
};
  
      function scroll()
      {
        window.onscroll=function()
       {
         var top=document.documentElement?document.documentElement.scrollTop:document.body.scrollTop;
         var menus=document.getElementById("menu_left").getElementsByTagName("a");
         var items=getByclassName(document.getElementById("content"),"item");
         var currentId="";
         for (var i = 0; i < items.length; i++) {
          var _item=items[i];
          var _itemTop=_item.offsetTop;
          if(top>_itemTop-200)
          {
            currentId=_item.id;
          }
          else
          {
            break;
          }
         }
         if(currentId)
         {
          //给正确的menu下的a元素class赋值
          for (var i = 0; i < menus.length; i++) {
            var _menu=menus[i];
            var _href=_menu.href.split("#");
            _menu.onmouseover=function()
            {
                   for (var i = 0; i < menus.length; i++) {
                    menus[i].className="";
                   }
            };
            if(_href[_href.length-1]!=currentId)
            {     
                     //_menu.className="";  当时认为简单的方法
              removeClass(_menu,"current");
            }
            else
            {    //_menu.className="current";
              addClass(_menu,"current");
            }

          }
         }
      };
    };*/
  //toUp
  function toUp()
  {
    var toUp=document.getElementById("toUp");
    var oDiv=toUp.getElementsByTagName("div");
    var oSpan=toUp.getElementsByTagName("span");
    for (var i = 0; i < oDiv.length; i++) {
      oDiv[i].onmouseover=function()
      { 
         var _this=this.getElementsByTagName("span")[0];
        startMove(this,{width:80,opacity:100},function()
          {  
            _this.style.display="block";
          });
        

      }
      oDiv[i].onmouseout=function()
      {
        var _this=this.getElementsByTagName("span")[0];

         _this.style.display="none";
        
        startMove(this,{width:32,opacity:60})
      }

    }
  }