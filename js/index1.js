$(document).ready(function(){
//轮播图
  var box=$(".bnbox");
  var yuanxing=$(".bt");
  var imgs=$(".bn");
  var zuoniu=$(".btL");
  var youniu=$(".btR");
   yuanxing.eq(0).addClass("hot");
   var now=0;
   var t=setInterval(move,2000);
  box.on("mouseover",function(){
    clearInterval(t);
   zuoniu.show();
   youniu.show();
   })
   box.on("mouseout",function(){
    t=setInterval(move,2000)
   zuoniu.hide();
   youniu.hide();
   })
 youniu.on("click",function(){
      move();
  })
 zuoniu.on("click",function(){
    move1();
  })
yuanxing.mouseover(function(){
  var index=$(this).index();
  imgs.fadeOut().eq(index).fadeIn();
  yuanxing.removeClass("hot").eq(index).addClass("hot");
  now=index;
   })

function move(){
  now++;
  if(now==imgs.size()){
    now=0;
  }
  imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")

}
 function move1(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")
  }	
  //送至北京
  $(".beijingbox").hover(function(){
  	$(".xuanxiang").show();
  	$(this).css("background","#fff")
  },function(){
  	$(".xuanxiang").hide();
  	$(this).css("background","#f1f1f1")
  })
  $(".xuanxiang li").hover(function(){
    var index=$(".xuanxiang li").index($(this));
    $(".xuanxiang li").eq(index).css("background","#f4f4f4")
    $(".xuanxiang a").eq(index).css("color","#c81623");
  },function(){
  	 var index=$(".xuanxiang li").index($(this));
    $(".xuanxiang li").eq(index).css("background","#fff")
    $(".xuanxiang a").eq(index).css("color","#666");
  })
    $(".xuanxiang li").click(function(){
    var index=$(".xuanxiang li").index($(this));
    $(".xuanxiang li").eq(index).css("background","#c81623")
    $(".xuanxiang a").eq(index).css("color","#fff");
    })
    //我的京东
    function wode(obj1,obj2){
    	obj1.hover(function(){
    	obj2.show();
    	obj1.css("background","#fff")
    },function(){
    	obj2.hide();
    	obj1.css("background","#f1f1f1")
    })
    }
    wode($(".wodebox"),$(".wdjd")) //我的京东
    wode($(".shoujibox"),$(".juti"))//手机京东
    wode($(".guanzhubox"),$(".gzjd")) //关注京东
    wode($(".kehubox"),$(".khfw")) //客户服务
    wode($(".wangzhanbox"),$(".wzdh")) //网站导航	
    wode($(".shoping"),$(".gwc")) //购物车 
//节点轮播
var aw=$(".lunbox .imgs").width()+parseInt($(".lunbox .imgs").css("margin-right"));
var flag1=true;
var t1=setInterval(moveR,2000);
$(".lunbox").css("width",aw*$(".lunbox .imgs").length);
$(".lun").hover(function(){
  clearInterval(t1);
  $(".lun .zuoyi").show();
  $(".lun .youyi").show();
},function(){
  t1=setInterval(moveR,2000);
  $(".lun .zuoyi").hide();
  $(".lun .youyi").hide();
})
$(".youyi").click(function(){
  if(flag1){
    moveR();
    flag1=false;
  }
})
$(".zuoyi").click(function(){
  if(flag1){
    moveL();
    flag1=false;
  }
})
function moveR(){
  $(".lunbox").animate({left:-aw*4},function(){
  	for(var i=0;i<4;i++){
  		 var first=$(".lunbox a:first-child");
    $(".lunbox").append(first).css("left",0);
  	}
    flag1=true;
  })
}
function moveL(){
	 for(var i=0;i<4;i++){
       var first=$(".lunbox a:first-child");
       var last=$(".lunbox a:last-child");
       first.insertBefore(last);
	 }
    $(".lunbox").css("left",-aw*4).animate({left:0},function(){
      flag1=true;
    })
}
//每楼选项卡
$(".clothesBox .cloCRbox1").addClass("cloCR");
$(".f2box .cloCRbox2").addClass("cloCR");
$(".f3box .cloCRbox3").addClass("cloCR");
$(".floorlist").addClass("fbox").eq(11).removeClass("fbox");
$(".fbox").each(function(index){
  $(".fbox:eq("+index+") .dapai:eq("+0+")").addClass("active");
  $(".fbox:eq("+index+") .cloCR:eq("+0+")").css("z-index",10);
  $(".fbox:eq("+index+") .dapai").each(function(index1){
     $(".fbox:eq("+index+") .dapai:eq("+index1+")").css("width",$(".fbox:eq("+index+") .dapai:eq("+index1+")").width());
     $(".fbox:eq("+index+") .dapai:eq("+0+")").css("width",58); 
     $(".fbox:eq("+index+") .dapai:eq("+index1+")").mouseover(function(){
     $(".fbox:eq("+index+") .cloCR").hide();
     $(".fbox:eq("+index+") .cloCR:eq("+index1+")").show();
     $(".fbox:eq("+index+") .dapai").removeClass("active");
     $(".fbox:eq("+index+") .dapai:eq("+index1+")").addClass("active");   
    })
   })
})
//每楼小轮播
$(".floorbox").each(function(index){
   LBTH($(".floorbox").eq(index),$(".yuanniu").eq(index))
})
function LBTH(obj1,obj2){
  var yuanxing1=$(".anniu",obj2);
  var imgs1=$(".floorimg",obj1);
  var zuoniu1=$(".leftniu",obj1);
  var youniu1=$(".rightniu",obj1);
  var MV=$(obj1).width();
  imgs1.eq(0).css("left",0);
   yuanxing1.eq(0).addClass("hot");
   var now1=0;next1=0;flag1=true;
   var t1=setInterval(move,2000);
   obj1.on("mouseover",function(){
    clearInterval(t1);
    zuoniu1.show();
    youniu1.show();
   })
    obj1.on("mouseout",function(){
    t1=setInterval(move,2000)
    zuoniu1.hide();
    youniu1.hide();
   })
  youniu1.on("click",function(){
    if(flag1){
      move();
    }flag1=false;
  })
  zuoniu1.on("click",function(){
    if(flag1){
      move1();
    }flag1=false;
  })
yuanxing1.click(function(){
  var index=$(this).index();
     next1=index;
      if(now1<index){
        imgs1.eq(index).css("left",MV).end().eq(now1).animate({left:-MV}).end().eq(next1).animate({left:0});
      }else if(now1>index){
        imgs1.eq(index).css("left",-MV).end().eq(now1).animate({left:MV}).end().eq(next1).animate({left:0});
      }else return;
   yuanxing1.eq(now1).removeClass("xin");
   yuanxing1.eq(index).addClass("xin");
   now1=index;
   next1=index;
   })
function move(){
  next1++;
  if(next1==imgs1.size()){
    next1=0;
  }
  imgs1.eq(next1).css("left",MV).end().eq(now1).animate({left:-MV}).end().eq(next1).animate({left:0},function(){
    flag1=true;
  });
  yuanxing1.eq(now1).removeClass("xin").end().eq(next1).addClass("xin");
  now1=next1;
}
 function move1(){
    next1--;
    if(next1<0){
      next1=imgs1.length-1;
    }
    imgs1.eq(next1).css("left",-MV).end().eq(now1).animate({left:MV}).end().eq(next1).animate({left:0},function(){
      flag1=true;
    })
    yuanxing1.eq(now1).removeClass("xin").end().eq(next1).addClass("xin");
     now1=next1;
  }
}
//左导航
var Cheight=document.documentElement.clientHeight;
// console.log(Cheight)
var n;
var sign=true;
$(".floorlist").each(function(index){
  $(".floorlist").eq(index).data("h",$(".floorlist").eq(index).offset().top);
})
$(window).on("scroll",function(){
  if(sign){
   var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=$(obj).scrollTop(); 
    if(top>=$(".floorlist").eq(0).data("h")-300){
      $(".leftNav").show();
      var nheight=$(".leftNav").height();
       $(".leftNav").css("top",(Cheight-nheight)/2)  
    }
    $(".floorlist").each(function(index){
      if(top>=$(".floorlist").eq(index).data("h")-200){
        $(".floorlist").each(function(index1){
            $(".f1").eq(index1).css("background-position","0px -35px");
            $(".f1bj").eq(index1).hide();
            $(".title").eq(index1).hide();
            $(".floornum").eq(index1).show();
        })
        $(".f1").eq(index).css("background-position","0px 0px");
        $(".f1bj").eq(index).show().animate({"top":25},1000)
        $(".floornum").eq(index).hide();
        $(".title").eq(index).show();
        $(".title").eq(index).removeClass("dianji")
        n=index;
      }
    })
    if(top<$(".floorlist").eq(0).data("h")-600||top>=$(".picBox").offset().top-200){
      $(".leftNav").hide();
    }
  }
})
$(".floorlis").each(function(index){
  $(".floorlis").eq(index).click(function(){
 sign=false;
 $(document.body).animate({scrollTop:$(".floorlist").eq(index).data("h")},function(){
  sign=true;
 });
 $(document.documentElement).animate({scrollTop:$(".floorlist").eq(index).data("h")},function(){
  sign=true;
 })
 n=index;
})
  $(".floorlis").eq(index).hover(function(){
    $(".title").eq(index).css("display","block").addClass("dianji");
    $(".floornum").eq(index).hide();
  },function(){
    if(n==index){
       $(".title").eq(index).css("display","block").removeClass("dianji");
    }else{
        $(".title").eq(index).hide();
         $(".floornum").eq(index).show();
    }   
  })
})
//banner左侧导航
$(".dh").hover(function(){
  var index=$(".dh").index($(this));
  $(".zhankai").eq(index).show();
},function(){
  var index=$(".dh").index($(this));
  $(".zhankai").eq(index).hide();
})
//猜你喜欢
$(".cnxhbox").hover(function(){
  $(".cnxhbox p").css("left",0).animate({"left":$(".cnxhbox").width()-$(".cnxhbox p").width()});
},function(){
  $(".cnxhbox p").css("left",$(".cnxhbox").width()-$(".cnxhbox p").width())
})
$(".nr").eq(0).show();
$(".xuanze").click(function(){
  shift();
})
var nrn=0;
function shift(){
  nrn++;
 if(nrn==$(".nr").length){
  nrn=0;
 }
 $(".nr").hide().eq(nrn).show();
}
//天天低价
 var ah=$(".ttRbbox .ttRbnr").height()+parseInt($(".ttRbbox .ttRbnr").css("margin-bottom"));
var fl=true;
var t2=setInterval(moveR2,2000);
$(".ttRbbox").css("height",ah*$(".ttRbbox .ttRbnr").length);
$(".ttRb1").hover(function(){
  clearInterval(t2);
},function(){
  t2=setInterval(moveR2,2000);
})
function moveR2(){
  $(".ttRbbox").animate({top:-ah},function(){
       var first=$(".ttRbbox li:first-child");
    $(".ttRbbox").append(first).css("top",0);
    fl=true;
  })
}
$(".ttLb2tu").hover(function(){
  var index=$(".ttLb2tu").index($(this))
  $(".ttLb2tu").eq(index).animate({"margin-left":"-7px"},200)
},function(){
  var index=$(".ttLb2tu").index($(this))
  $(".ttLb2tu").eq(index).animate({"margin-left":0},200)
})
$(".tttu").hover(function(){
  $(this).animate({"margin-left":-7},200)
},function(){
  $(this).animate({"margin-left":0},200)
})
//右导航
$(".tab1").hover(function(){
  var index=$(".tab1").index($(this));
    $(".ico").eq(index).css("background-color","#c81623");
    $(".tab1word").eq(index).animate({"left":-62},600).css("background","#7a6e6e")
  },function(){
     var index=$(".tab1").index($(this));
    $(".ico").eq(index).css("background-color","#7a6e6e");
    $(".tab1word").eq(index).animate({"left":0},600).css("background","#7a6e6e")
  })
//返回顶部
 jQuery.backTop($(".tab1").eq(6),300);  
//按需加载
$("img").addClass("lazy");
$(".floorbox img").removeClass("lazy");
$(".bnxia img").removeClass("lazy");
$(".cnbox img").removeClass("lazy");
$("img.lazy").attr("src","image/loading.gif");
$("img.lazy").lazyload();
//京东快报
var bannerflag=true;
if (bannerflag) {
        bannerflag=false;
$(".zhege").mouseover(function(){
    var index=$(".zhege").index($(this));
    $(".meige").css("z-index",5).eq(index).css("z-index",10)
    $(".meige").animate({"top":"29px"},function(){
        $(".kgx").css("display","none").eq(index).css("display","block");
        bannerflag=true;
    });
    $(".bnbrbox").animate({"top":"-41px"}); 
})
}
$(".hfcz").css("display","none").eq(0).css("display","block");
$(".gnjpz").css("display","none").eq(0).css("display","block");
$(".zzry").css("display","none").eq(0).css("display","block");
$(".dk").css("display","none").eq(0).css("display","block");
$(".l3").eq(0).css("background","#c81623");
$(".l4").eq(0).css("background","#c81623");
$(".l2").eq(0).css("background","#c81623");
$(".l5").eq(0).css("background","#c81623");
$(".l1a1").eq(0).css("color","#fff");
$(".l1a2").eq(0).css("color","#fff");
$(".l1a4").eq(0).css("color","#fff");
$(".l1a5").eq(0).css("color","#fff");
$(".sjx1").eq(0).css("display","block");
$(".sjx2").eq(0).css("display","block");
$(".sjx4").eq(0).css("display","block");
$(".sjx5").eq(0).css("display","block");
$(".l3").mouseover(function(){
    var index=$(".l3").index($(this));
        $(".hfcz").css("display","none").eq(index).css("display","block");
        $(".l3").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a1").css("color","#666").eq(index).css("color","#fff");
        $(".sjx1").css("display","none").eq(index).css("display","block");
    })
$(".l2").mouseover(function(){
    var index=$(".l2").index($(this));
        $(".gnjpz").css("display","none").eq(index).css("display","block");
        $(".l2").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a2").css("color","#666").eq(index).css("color","#fff");
        $(".sjx2").css("display","none").eq(index).css("display","block");
    })
$(".l4").mouseover(function(){
    var index=$(".l4").index($(this));
        $(".zzry").css("display","none").eq(index).css("display","block");
        $(".l4").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a4").css("color","#666").eq(index).css("color","#fff");
        $(".sjx4").css("display","none").eq(index).css("display","block");
    })
$(".l5").mouseover(function(){
    var index=$(".l5").index($(this));
        $(".dk").css("display","none").eq(index).css("display","block");
        $(".l5").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a5").css("color","#666").eq(index).css("color","#fff");
        $(".sjx5").css("display","none").eq(index).css("display","block");
    })
$(".closex").click(function(){
    $(".middlekx").animate({"top":"209px"});
    $(".bnbrbox").animate({"top":"0"});
    $(".kgx").css("display","none") 
})

})