$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.打算种植仙人球的你，知道下列不属于仙人球别称的是：",
	answer_1:"草球",
	answer_2:"长盛丸",
	answer_3:"短毛丸",
	answer_4:"樟脑丸",
	answer:"4",
	picture:"<img src='./image/develop/develop_cactus_ (1).png'>"
},
{
	problem: "2.你知道，仙人球是：",
	answer_1:"喜干、耐旱的植物",
	answer_2:"喜湿、耐涝的植物",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (1).png'>"
},
{
	problem: "3.播种仙人球种子前，是否有必要保持土壤湿润：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (1).png'>"
},
{
	problem: "4.仙人球的盆栽排水性能是否重要：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (1).png'>"
},
{
	problem: "5.你想知道仙人球是否属于双子叶植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (1).png'>"
},
{
	problem: "6.小仙人球发芽了，经过观察和记录，你发觉，仙人球发芽往往需要：",
	answer_1:"一星期左右",
	answer_2:"一个月左右",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (2).png'>"
},
{
	problem: "7.仙人球成长时，你想知道该如何把握浇水：",
	answer_1:"天天浇少量水",
	answer_2:"看到土层干燥了再浇少量水",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (2).png'>"
},
{
	problem: "8.经过观察和查阅资料，你知道，仙人球是一种：",
	answer_1:"生长速度极慢的植物",
	answer_2:"生长速度极快的植物",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (2).png'>"
},
{
	problem: "9.仙人球是否需要经常施肥：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (2).png'>"
},
{
	problem: "10.冬季仙人球种植白天最好保持20度以上，晚上保持10度以上，是为了：",
	answer_1:"提高仙人球的抗寒性",
	answer_2:"避免仙人球根系腐烂",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (2).png'>"
},
{
	problem: "11.不知道过了多久，你发觉仙人球长大了不少，要是仙人球出现颜色变浅或变色情况，应该：",
	answer_1:"多浇水",
	answer_2:"多施肥",
	answer_3:"多晒太阳",
	answer_4:"不作处理",
	answer:"3",
	picture:"<img src='./image/develop/develop_cactus_ (3).png'>"
},
{
	problem: "12.对仙人球喷洒杀虫剂后，应该：",
	answer_1:"加大阳光直射量，加快杀虫剂奏效",
	answer_2:"减少太阳直射量，避免光中毒",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (3).png'>"
},
{
	problem: "13.夏季时候，仙人球是否适合一直放在室外：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (3).png'>"
},
{
	problem: "14.你很好奇，仙人球是否属于会开花的植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (3).png'>"
},
{
	problem: "15.知道仙人球会开花后，你想知道仙人球的花期是：",
	answer_1:"春夏季",
	answer_2:"秋冬季",
	answer_3:"夏秋季",
	answer_4:"全年",
	answer:"4",
	picture:"<img src='./image/develop/develop_cactus_ (3).png'>"
},
{
	problem: "16.已经可以看到仙人球的花蕊了，你知道，仙人球花的颜色：",
	answer_1:"只有一种",
	answer_2:"品种不同就可能有不同颜色",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (4).png'>"
},
{
	problem: "17.你想知道仙人球开的花一般能维持几天：",
	answer_1:"1-3天",
	answer_2:"一周多",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (4).png'>"
},
{
	problem: "18.仙人球底部要是变得坚硬，成棕黑色，是：",
	answer_1:"仙人球生病了",
	answer_2:"仙人球生长过程的正常现象",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (4).png'>"
},
{
	problem: "19.如果仙人球其他部位也开始变得成棕黑色，可能是：",
	answer_1:"仙人球接受了过多的阳光",
	answer_2:"正常的生长现象",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (4).png'>"
},
{
	problem: "20.你想知道，仙人球开花的时候是否需要浇比平常多的水：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (4).png'>"
},
{
	problem: "21.仙人球开花真是美丽，有人告诉过你，仙人球开花意味着不久将要死亡，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (5).png'>"
},
{
	problem: "22.你想知道，冬天仙人球如何浇水：",
	answer_1:"天天浇少量水",
	answer_2:"从来不浇水",
	answer_3:"盆土干燥时也只浇少量水",
	answer_4:"盆土干燥时浇水到土湿润",
	answer:"3",
	picture:"<img src='./image/develop/develop_cactus_ (5).png'>"
},
{
	problem: "23.你很好奇，仙人球是否会结果：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (5).png'>"
},
{
	problem: "24.仙人球结果是否意味着将要死亡：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_cactus_ (5).png'>"
},
{
	problem: "25.你很好奇，仙人球的果实是否能够食用",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_cactus_ (5).png'>"
},
	{
	problem: "恭喜，你的仙人球结果啦!",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_cactus_ (6).png'>"
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
			if(i%5==0&&i!=25){
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
				if(i==25)alert("恭喜结束");
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
			if(i%5==0&&i!=25){
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
				if(i==25)alert("恭喜结束");
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
			if(i%5==0&&i!=25){
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
				if(i==25)alert("恭喜结束");
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
			if(i%5==0&&i!=25){
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
				if(i==25)alert("恭喜结束");
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