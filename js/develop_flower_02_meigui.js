$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.买了玫瑰种子的你，知道玫瑰种子当然是来自玫瑰果实了，你想知道什么时候从玫瑰果实中获取种子是错误的：",
	answer_1:"当果实由绿转向其他颜色时",
	answer_2:"当果实开始变干时",
	answer_3:"果实变干快调落时",
	answer_4:"果实干透或变成深褐色时",
	answer:"4",
	picture:"<img src='./image/develop/develop_rose_ (1).png'>"
},
{
	problem: "2.有人说过可以将自己从果实中取出的玫瑰种子浸泡在稀释过的过氧化氢溶液来减少种子表面苔藓生长的几率，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (1).png'>"
},
{
	problem: "3.如果不是从商店购买的玫瑰种子，是否有必要放到冰箱保鲜层降温处理：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (1).png'>"
},
{
	problem: "4.你想知道一般玫瑰花种子需要多久才能发芽：",
	answer_1:"1周内",
	answer_2:"2周-3周",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_rose_ (1).png'>"
},
{
	problem: "5.有些人种的玫瑰种子未经过层积处理，那么他们种下的玫瑰种子可能：",
	answer_1:"几个月都不见发芽",
	answer_2:"长得特别快",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (2).png'>"
},
{
	problem: "6.你想知道玫瑰幼苗生长的理想温度大概是：",
	answer_1:"10-17度",
	answer_2:"16-21度",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_rose_ (2).png'>"
},
{
	problem: "7.你知道玫瑰幼苗成长所需的每日光照时长约为：",
	answer_1:"6小时",
	answer_2:"9小时",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (2).png'>"
},
{
	problem: "8.玫瑰生长的土壤pH条件大概为：",
	answer_1:"6.3-6-8",
	answer_2:"7.3-7.8",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (2).png'>"
},
{
	problem: "9.玫瑰苗成长了不少，你想知道玫瑰苗的土壤是否需要良好的渗水性：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (3).png'>"
},
{
	problem: "10.你在网上了解过，玫瑰是一种：",
	answer_1:"既不耐旱又不耐寒的植物",
	answer_2:"耐旱耐寒的植物",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_rose_ (3).png'>"
},
{
	problem: "11.你真期待自己种的玫瑰早日开花，你知道玫瑰花期是：",
	answer_1:"5-6月",
	answer_2:"7-8月",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (3).png'>"
},
{
	problem: "12.你知道下列不属于常见玫瑰害虫的是：",
	answer_1:"玫瑰茎叶蜂",
	answer_2:"蚜虫",
	answer_3:"红蜘蛛",
	answer_4:"白额高脚蛛",
	answer:"4",
	picture:"<img src='./image/develop/develop_rose_ (3).png'>"
},
{
	problem: "13.已经看到玫瑰花蕊了，你想知道夏天该如何浇水：",
	answer_1:"一周只浇一次水",
	answer_2:"不频繁浇水，但保证土壤不干燥",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_rose_ (4).png'>"
},
{
	problem: "14.玫瑰生长时,修剪枝叶可以:",
	answer_1:"让玫瑰长得更加健康和强壮",
	answer_2:"导致玫瑰凋亡得更快",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (4).png'>"
},
{
	problem: "15.玫瑰耐寒,种在外面的玫瑰寒冬时是否需要做保护措施:",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_rose_ (4).png'>"
},
{
	problem: "16.下列不是有效又合理的为玫瑰减少虫害的方法是:",
	answer_1:"给花丛浇足够的水",
	answer_2:"喷洒洗碗皂加水的混合液",
	answer_3:"喷洒大量杀虫剂",
	answer_4:"喷洒天然玫瑰精油杀虫剂",
	answer:"3",
	picture:"<img src='./image/develop/develop_rose_ (4).png'>"
},
{
	problem: "恭喜,你种下的玫瑰开出了美丽的花!",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_rose_ (5).png'>"
}
];
for(var i = 0 ;next==0;next=1)
{
	$(".develop_situation").html(information[i]["picture"]);
	$(".problem").html(information[i]["problem"]);
	$(".answer_1").html(information[i]["answer_1"]);
	$(".answer_2").html(information[i]["answer_2"]);
	$(".answer_3").html(information[i]["answer_3"]);
	$(".answer_4").html(information[i]["answer_4"]);
	if(information[i]["answer_3"]== blank)
		{$("#answer_3,#answer_4").css("display","none");}
	else
		{$("#answer_3,#answer_4").css("display","block");}
	$(".develop_back").click(function(){/* 返回上一题 */
			if(i>0)
			{
				i--;
				$(".develop_situation").html(information[i]["picture"]);
				$(".problem").html(information[i]["problem"]);
				$(".answer_1").html(information[i]["answer_1"]);
				$(".answer_2").html(information[i]["answer_2"]);
				$(".answer_3").html(information[i]["answer_3"]);
				$(".answer_4").html(information[i]["answer_4"]);
			if(information[i]["answer_3"]== blank)
				{$("#answer_3,#answer_4").css("display","none");}
			else
				{$("#answer_3,#answer_4").css("display","block");}
			$(".answer_1,.answer_2,.answer_3,.answer_4").css("background-color","#7CCD7C");
			}
		});
		$("#answer_1 ,#answer_2 ,#answer_3 ,#answer_4").hover(function(){
			$(this).toggleClass("change");
		});
	$(".answer_1").click(function(){
		judge="1";
		if(judge == information[i]["answer"])
		{
			i++;
			if(i%4==0&&i!=16){
					$(".sun_moon").css("display","block").attr("src","./image/sun_moon/mountain.gif");
					setTimeout("$('.sun_moon').attr('src','');",2500);
					setTimeout("$('.sun_moon').css('display','none');",2600);
				}
			$(".develop_situation").html(information[i]["picture"]);
			$(".problem").html(information[i]["problem"]);
			$(".answer_1").html(information[i]["answer_1"]);
			$(".answer_2").html(information[i]["answer_2"]);
			$(".answer_3").html(information[i]["answer_3"]);
			$(".answer_4").html(information[i]["answer_4"]);
				if(i==16)alert("恭喜结束");
			else if(information[i]["answer_3"]== blank)
				{$("#answer_3,#answer_4").css("display","none");}
			else
				{$("#answer_3,#answer_4").css("display","block");}
			$(".answer_1,.answer_2,.answer_3,.answer_4").css("background-color","#7CCD7C");
		}
		else{
			$(".answer_1").css("background-color","red");
		}
	});
	$(".answer_2").click(function(){
		judge="2";
		if(judge == information[i]["answer"])
		{
			i++;
			if(i%4==0&&i!=16){
					$(".sun_moon").css("display","block").attr("src","./image/sun_moon/mountain.gif");
					setTimeout("$('.sun_moon').attr('src','');",2500);
					setTimeout("$('.sun_moon').css('display','none');",2600);
				}
			$(".develop_situation").html(information[i]["picture"]);
			$(".problem").html(information[i]["problem"]);
			$(".answer_1").html(information[i]["answer_1"]);
			$(".answer_2").html(information[i]["answer_2"]);
			$(".answer_3").html(information[i]["answer_3"]);
			$(".answer_4").html(information[i]["answer_4"]);
				if(i==16)alert("恭喜结束");
			else if(information[i]["answer_3"]== blank)
				{$("#answer_3,#answer_4").css("display","none");}
			else
				{$("#answer_3,#answer_4").css("display","block");}
			$(".answer_1,.answer_2,.answer_3,.answer_4").css("background-color","#7CCD7C");
		}
		else{
			$(".answer_2").css("background-color","red");
		}
	});
	$(".answer_3").click(function(){
		judge="3";
		if(judge == information[i]["answer"])
		{
			i++;
			if(i%4==0&&i!=16){
					$(".sun_moon").css("display","block").attr("src","./image/sun_moon/mountain.gif");
					setTimeout("$('.sun_moon').attr('src','');",2500);
					setTimeout("$('.sun_moon').css('display','none');",2600);
				}
			$(".develop_situation").html(information[i]["picture"]);
			$(".problem").html(information[i]["problem"]);
			$(".answer_1").html(information[i]["answer_1"]);
			$(".answer_2").html(information[i]["answer_2"]);
			$(".answer_3").html(information[i]["answer_3"]);
			$(".answer_4").html(information[i]["answer_4"]);
				if(i==16)alert("恭喜结束");
			else if(information[i]["answer_3"]== blank)
				{$("#answer_3,#answer_4").css("display","none");}
			else
				{$("#answer_3,#answer_4").css("display","block");}			
			$(".answer_1,.answer_2,.answer_3,.answer_4").css("background-color","#7CCD7C");
		}
		else{
			$(".answer_3").css("background-color","red");
		}
	});
	$(".answer_4").click(function(){
		judge="4";
		if(judge == information[i]["answer"])
		{
			i++;
			if(i%4==0&&i!=16){
					$(".sun_moon").css("display","block").attr("src","./image/sun_moon/mountain.gif");
					setTimeout("$('.sun_moon').attr('src','');",2500);
					setTimeout("$('.sun_moon').css('display','none');",2600);
				}
			$(".develop_situation").html(information[i]["picture"]);
			$(".problem").html(information[i]["problem"]);
			$(".answer_1").html(information[i]["answer_1"]);
			$(".answer_2").html(information[i]["answer_2"]);
			$(".answer_3").html(information[i]["answer_3"]);
			$(".answer_4").html(information[i]["answer_4"]);			
				if(i==16)alert("恭喜结束");
			else if(information[i]["answer_3"]== blank)
				{$("#answer_3,#answer_4").css("display","none");}
			else
				{$("#answer_3,#answer_4").css("display","block");}			
			$(".answer_1,.answer_2,.answer_3,.answer_4").css("background-color","#7CCD7C");
		}
		else{
			$(".answer_4").css("background-color","red");
		}
	});	
}	//for 循环的边界
});