$(document).ready(function(){	
	var page = 0;
	$(".page_1").css("border-color","red");
	$(".page_1").click(function(){
	  page=1;
    $(".page_1").css("border-color","red");
    $(".page_2").css("border-color","white");
    $(".page_3").css("border-color","white");
    $(".page_4").css("border-color","white");
    $(".book_a").attr("src","./image/book/book_1_a.jpg");
    $(".book_b").attr("src","./image/book/book_1_b.jpg");
    $(".book_c").attr("src","./image/book/book_1_c.jpg");
    $(".book_d").attr("src","./image/book/book_1_d.jpg");
    $(".book_A").html("书名:常见蔬菜图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
    $(".book_B").html("书名:常见水果图鉴<br>作者:于雅婷<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
    $(".book_C").html("书名:野花图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
    $(".book_D").html("书名:大自然的珍贵礼物<br>作者:(奥)苏珊娜·莉娅 等<br>出版社:河北少年儿童出版社<br>出版时间:2017年10月");
  });
	$(".page_2").click(function(){
		page=2;
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","red");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_2_a.jpg");
		$(".book_b").attr("src","./image/book/book_2_b.jpg");
		$(".book_c").attr("src","./image/book/book_2_c.jpg");
		$(".book_d").attr("src","./image/book/book_2_d.jpg");
		$(".book_A").html("书名:世界园林植物花卉百科全书<br>作者:(英)克里斯托弗.布里克尔<br>出版社:河南科学技术出版社<br>出版时间:2006年06月");
		$(".book_B").html("书名:在阳台上种菜<br>作者:(日)藤田智 等<br>出版社:浙江科学技术出版社<br>出版时间:2011年05月");
		$(".book_C").html("书名:呀！蔬菜水果<br>作者:(法)弗朗索瓦兹·德·吉贝尔 等<br>出版社:花山文艺出版社<br>出版时间:2017年07月");
		$(".book_D").html("书名:我家门外的自然课<br>作者:(韩)南妍汀 等<br>出版社:中信出版社<br>出版时间:2016年03月");
  });
	$(".page_3").click(function(){
		page=3;
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","red");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_3_a.jpg");
		$(".book_b").attr("src","./image/book/book_3_b.jpg");
		$(".book_c").attr("src","./image/book/book_3_c.jpg");
		$(".book_d").attr("src","./image/book/book_3_d.jpg");
		$(".book_A").html("书名:美味蔬菜的360种做法<br>作者:甘智荣<br>出版社:江苏科学技术出版社<br>出版时间:2015年10月");
		$(".book_B").html("书名:新人养多肉零失败<br>作者:王意成<br>出版社:江苏科学技术出版社<br>出版时间:2016年01月");
		$(".book_C").html("书名:水果 一部图文史<br>作者:(英)彼得·布拉克本-梅兹 等<br>出版社:商务印书馆<br>出版时间:2017年11月");
		$(".book_D").html("书名:元气素食<br>作者:萨巴蒂娜<br>出版社:中国轻工业出版社<br>出版时间:2017年11月");
	});
	$(".page_4").click(function(){
		page=4;
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","red");
		$(".book_a").attr("src","./image/book/book_4_a.jpg");
		$(".book_b").attr("src","./image/book/book_4_b.jpg");
		$(".book_c").attr("src","./image/book/quill.png");
		$(".book_d").attr("src","./image/book/quill.png");
		$(".book_A").html("书名:植物百科彩色图鉴<br>作者:《植物百科彩色图鉴》编委会<br>出版社:吉林出版集团有限责任公司<br>出版时间:2012年06月");
		$(".book_B").html("书名:植物王国大百科<br>作者:于颜慈<br>出版社:广东科技出版社<br>出版时间:2016年08月");
		$(".book_C").html("");
		$(".book_D").html("");
	});
	$(".up_page").click(function(){
		if(page>1)page--;
		switch(page)
	{
  		case 1:
		$(".page_1").css("border-color","red");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_1_a.jpg");
		$(".book_b").attr("src","./image/book/book_1_b.jpg");
		$(".book_c").attr("src","./image/book/book_1_c.jpg");
		$(".book_d").attr("src","./image/book/book_1_d.jpg");
		$(".book_A").html("书名:常见蔬菜图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_B").html("书名:常见水果图鉴<br>作者:于雅婷<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_C").html("书名:野花图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_D").html("书名:大自然的珍贵礼物<br>作者:(奥)苏珊娜·莉娅 等<br>出版社:河北少年儿童出版社<br>出版时间:2017年10月");
		break;
  		case 2:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","red");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_2_a.jpg");
		$(".book_b").attr("src","./image/book/book_2_b.jpg");
		$(".book_c").attr("src","./image/book/book_2_c.jpg");
		$(".book_d").attr("src","./image/book/book_2_d.jpg");
		$(".book_A").html("书名:世界园林植物花卉百科全书<br>作者:(英)克里斯托弗.布里克尔<br>出版社:河南科学技术出版社<br>出版时间:2006年06月");
		$(".book_B").html("书名:在阳台上种菜<br>作者:(日)藤田智 等<br>出版社:浙江科学技术出版社<br>出版时间:2011年05月");
		$(".book_C").html("书名:呀！蔬菜水果<br>作者:(法)弗朗索瓦兹·德·吉贝尔 等<br>出版社:花山文艺出版社<br>出版时间:2017年07月");
		$(".book_D").html("书名:我家门外的自然课<br>作者:(韩)南妍汀 等<br>出版社:中信出版社<br>出版时间:2016年03月");
		break;
  		case 3:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","red");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_3_a.jpg");
		$(".book_b").attr("src","./image/book/book_3_b.jpg");
		$(".book_c").attr("src","./image/book/book_3_c.jpg");
		$(".book_d").attr("src","./image/book/book_3_d.jpg");
		$(".book_A").html("书名:美味蔬菜的360种做法<br>作者:甘智荣<br>出版社:江苏科学技术出版社<br>出版时间:2015年10月");
		$(".book_B").html("书名:新人养多肉零失败<br>作者:王意成<br>出版社:江苏科学技术出版社<br>出版时间:2016年01月");
		$(".book_C").html("书名:水果 一部图文史<br>作者:(英)彼得·布拉克本-梅兹 等<br>出版社:商务印书馆<br>出版时间:2017年11月");
		$(".book_D").html("书名:元气素食<br>作者:萨巴蒂娜<br>出版社:中国轻工业出版社<br>出版时间:2017年11月");
		break;
  		case 4:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","red");
		$(".book_a").attr("src","./image/book/book_4_a.jpg");
		$(".book_b").attr("src","./image/book/book_4_b.jpg");
		$(".book_c").attr("src","./image/book/quill.png");
		$(".book_d").attr("src","./image/book/quill.png");
		$(".book_A").html("书名:植物百科彩色图鉴<br>作者:《植物百科彩色图鉴》编委会<br>出版社:吉林出版集团有限责任公司<br>出版时间:2012年06月");
		$(".book_B").html("书名:植物王国大百科<br>作者:于颜慈<br>出版社:广东科技出版社<br>出版时间:2016年08月");
		$(".book_C").html("");
		$(".book_D").html("");
		break;
	}
	});
	$(".down_page").click(function(){
		if(page<4)page++;
		switch(page)
	{
		case 1:
		$(".page_1").css("border-color","red");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_1_a.jpg");
		$(".book_b").attr("src","./image/book/book_1_b.jpg");
		$(".book_c").attr("src","./image/book/book_1_c.jpg");
		$(".book_d").attr("src","./image/book/book_1_d.jpg");
		$(".book_A").html("书名:常见蔬菜图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_B").html("书名:常见水果图鉴<br>作者:于雅婷<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_C").html("书名:野花图鉴<br>作者:付彦荣<br>出版社:江苏科学技术出版社<br>出版时间:2017年04月");
		$(".book_D").html("书名:大自然的珍贵礼物<br>作者:(奥)苏珊娜·莉娅 等<br>出版社:河北少年儿童出版社<br>出版时间:2017年10月");
		break;
  		case 2:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","red");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_2_a.jpg");
		$(".book_b").attr("src","./image/book/book_2_b.jpg");
		$(".book_c").attr("src","./image/book/book_2_c.jpg");
		$(".book_d").attr("src","./image/book/book_2_d.jpg");
		$(".book_A").html("书名:世界园林植物花卉百科全书<br>作者:(英)克里斯托弗.布里克尔<br>出版社:河南科学技术出版社<br>出版时间:2006年06月");
		$(".book_B").html("书名:在阳台上种菜<br>作者:(日)藤田智 等<br>出版社:浙江科学技术出版社<br>出版时间:2011年05月");
		$(".book_C").html("书名:呀！蔬菜水果<br>作者:(法)弗朗索瓦兹·德·吉贝尔 等<br>出版社:花山文艺出版社<br>出版时间:2017年07月");
		$(".book_D").html("书名:我家门外的自然课<br>作者:(韩)南妍汀 等<br>出版社:中信出版社<br>出版时间:2016年03月");
		break;
  		case 3:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","red");
		$(".page_4").css("border-color","white");
		$(".book_a").attr("src","./image/book/book_3_a.jpg");
		$(".book_b").attr("src","./image/book/book_3_b.jpg");
		$(".book_c").attr("src","./image/book/book_3_c.jpg");
		$(".book_d").attr("src","./image/book/book_3_d.jpg");
		$(".book_A").html("书名:美味蔬菜的360种做法<br>作者:甘智荣<br>出版社:江苏科学技术出版社<br>出版时间:2015年10月");
		$(".book_B").html("书名:新人养多肉零失败<br>作者:王意成<br>出版社:江苏科学技术出版社<br>出版时间:2016年01月");
		$(".book_C").html("书名:水果 一部图文史<br>作者:(英)彼得·布拉克本-梅兹 等<br>出版社:商务印书馆<br>出版时间:2017年11月");
		$(".book_D").html("书名:元气素食<br>作者:萨巴蒂娜<br>出版社:中国轻工业出版社<br>出版时间:2017年11月");
		break;
  		case 4:
		$(".page_1").css("border-color","white");
		$(".page_2").css("border-color","white");
		$(".page_3").css("border-color","white");
		$(".page_4").css("border-color","red");
		$(".book_a").attr("src","./image/book/book_4_a.jpg");
		$(".book_b").attr("src","./image/book/book_4_b.jpg");
		$(".book_c").attr("src","./image/book/quill.png");
		$(".book_d").attr("src","./image/book/quill.png");
		$(".book_A").html("书名:植物百科彩色图鉴<br>作者:《植物百科彩色图鉴》编委会<br>出版社:吉林出版集团有限责任公司<br>出版时间:2012年06月");
		$(".book_B").html("书名:植物王国大百科<br>作者:于颜慈<br>出版社:广东科技出版社<br>出版时间:2016年08月");
		$(".book_C").html("");
		$(".book_D").html("");
		break;
	}
	});
});