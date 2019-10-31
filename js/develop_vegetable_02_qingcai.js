$(document).ready(function(){		
	var judge="#";
	var next=0;
	var blank="##";	
var information=[
{
	problem: "1.喜欢吃青菜的你，知道菜油是由：",
	answer_1:"种子榨出的",
	answer_2:"叶子榨出的",
	answer_3:"果实榨出的",
	answer_4:"花朵榨出的",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (1).png'>"
},
{
	problem: "2.喜欢吃青菜的你，知道下列不是青菜的别称的是：",
	answer_1:"小白菜",
	answer_2:"油菜",
	answer_3:"小油菜",
	answer_4:"花菜",
	answer:"4",
	picture:"<img src='./image/develop/develop_vegetable_ (1).png'>"
},
{
	problem: "3.青菜是否是双子叶植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (1).png'>"
},
{
	problem: "4.青菜通常播种的季节为：",
	answer_1:"春夏季",
	answer_2:"秋冬季",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_vegetable_ (1).png'>"
},
{
	problem: "5.青菜是否耐寒：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (1).png'>"
},
{
	problem: "6.看见自己种的青菜发芽了，你很是欣喜，你知道你该在发芽的两周后：",
	answer_1:"随浇水喷施1次稀薄的腐熟有机肥",
	answer_2:"进行大规模的杀虫剂喷洒",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (2).png'>"
},
{
	problem: "7.你知道青菜的原产地是：",
	answer_1:"亚洲",
	answer_2:"欧洲",
	answer_3:"非洲",
	answer_4:"美洲",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (2).png'>"
},
{
	problem: "8.青菜是否属于&quot长日照植物&quot：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (2).png'>"
},
{
	problem: "9.你知道，青菜发芽往往只需：",
	answer_1:"3-7天",
	answer_2:"10-15天",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (2).png'>"
},
{
	problem: "10.在炎热的夏天以洒水的形式给青菜浇水，你通常需要：",
	answer_1:"5-7天洒水一次",
	answer_2:"2-3天洒水一次",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_vegetable_ (2).png'>"
},
{
	problem: "11.你感觉青菜长大了不少，在堆肥时，你知道：",
	answer_1:"可以把有种子的杂草拿来堆肥",
	answer_2:"不该拿有种子的杂草堆肥",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_vegetable_ (3).png'>"
},
{
	problem: "12.有人说过，将青菜种植在弱酸或中性的土壤中，更有利于增加青菜产量，提高菜籽含油率，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (3).png'>"
},
{
	problem: "13.你知道青菜是害虫特别喜欢的一种蔬菜，下列不是常见的青菜害虫的是：",
	answer_1:"蚜虫",
	answer_2:"小菜蛾",
	answer_3:"黄条跳甲",
	answer_4:"蜈蚣",
	answer:"4",
	picture:"<img src='./image/develop/develop_vegetable_ (3).png'>"
},
{
	problem: "14.在温度适宜，条件较好的情况下，青菜从种植到收成往往需要：",
	answer_1:"20-30天",
	answer_2:"50-60天",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (3).png'>"
},
{
	problem: "15.你很好奇青菜是否会开花：",
	answer_1:"是，一般开花前收割",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_vegetable_ (3).png'>"
},
{
	problem: "恭喜，你种的青菜可以收成啦",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_vegetable_ (4).png'>"
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
			if(i%5==0&&i!=15){
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
				if(i==15)alert("恭喜结束");
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
			if(i%5==0&&i!=15){
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
				if(i==15)alert("恭喜结束");
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
			if(i%5==0&&i!=15){
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
				if(i==15)alert("恭喜结束");
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
			if(i%5==0&&i!=15){
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
				if(i==15)alert("恭喜结束");
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