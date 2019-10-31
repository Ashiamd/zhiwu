$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.作为好奇宝宝的你，上网了解到，西瓜还被叫做：",
	answer_1:"倭瓜",
	answer_2:"甜瓜",
	answer_3:"青门绿玉房",
	answer_4:"地瓜",
	answer:"3",
	picture:"<img src='./image/develop/develop_watermelon_ (1).png'>"
},
{
	problem: "2.种下西瓜种子之前，你上网了解到西瓜发芽需要的温度为：",
	answer_1:"大约37度",
	answer_2:"超过21度",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (1).png'>"
},
{
	problem: "3.西瓜的种子你是从吃完的西瓜里取出来的，你想知道是否存在含黄色果肉的西瓜：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (1).png'>"
},
{
	problem: "4.种植西瓜，需要适宜pH值的土壤，你上网了解到：",
	answer_1:"pH最适为6.0-6.8",
	answer_2:"pH最适为7.2-8.0",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (1).png'>"
},
{
	problem: "5.真期待你种的西瓜种子发芽呀，你知道，西瓜发芽通常需要：",
	answer_1:"3-4天",
	answer_2:"7-10天",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (1).png'>"
},
{
	problem: "6.看到自己种下的西瓜种子发芽了，在植株长到10公分左右的高度时，你打算：",
	answer_1:"减少浇水的频率",
	answer_2:"让植株能吸收更多的阳光",
	answer_3:"堆肥且增大光照时间",
	answer_4:"做好护根且避免土壤过热",
	answer:"4",
	picture:"<img src='./image/develop/develop_watermelon_ (2).png'>"
},
{
	problem: "7.施肥是门学问，别人告诉过你，西瓜在幼苗期，需要：",
	answer_1:"多施加精肥，不能吝啬",
	answer_2:"施加肥料，但是量少",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (2).png'>"
},
{
	problem: "8.西瓜是什么样的植物，你得知西瓜属于：",
	answer_1:"耐旱性作物",
	answer_2:"耐涝性作物",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (2).png'>"
},
{
	problem: "9.你很担心自己种的西瓜以后被害虫缠身，上网了解到，下列不属于常见的西瓜害虫的是：",
	answer_1:"瓜叶螨",
	answer_2:"红蜘蛛",
	answer_3:"瓜螟",
	answer_4:"瓜蚜",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (2).png'>"
},
{
	problem: "10.西瓜发芽期间，需要：",
	answer_1:"湿度大，通风好，控温27-31度",
	answer_2:"湿度小，通风好，控温20-25度",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (2).png'>"
},
{
	problem: "11.西瓜幼苗成长了不少，你了解到，西瓜属于：",
	answer_1:"双子叶植物",
	answer_2:"单子叶植物",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (3).png'>"
},
{
	problem: "12.了解到种植西瓜的一些技巧后，你知道晴天中午伸蔓的西瓜如果叶片边缘变黄，说明：",
	answer_1:"西瓜苗增大施肥量",
	answer_2:"西瓜苗需要减少施肥量",
	answer_3:"西瓜吸收过多水",
	answer_4:"需要给西瓜浇水",
	answer:"3",
	picture:"<img src='./image/develop/develop_watermelon_ (3).png'>"
},
{
	problem: "13.真期待西瓜能够早日开花呀，你了解，一般种植的西瓜的花颜色为：",
	answer_1:"粉红",
	answer_2:"白色",
	answer_3:"浅绿",
	answer_4:"黄色",
	answer:"4",
	picture:"<img src='./image/develop/develop_watermelon_ (3).png'>"
},
{
	problem: "14.你想知道，西瓜是否耐寒：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (3).png'>"
},
{
	problem: "15.期待西瓜开花的你想知道，西瓜苗开花时，是否需要人工授粉：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (3).png'>"
},
{
	problem: "16.看到西瓜的花蕊，你很是欣喜，你知道西瓜的花期通常为：",
	answer_1:"春季",
	answer_2:"夏季",
	answer_3:"秋季",
	answer_4:"冬季",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (4).png'>"
},
{
	problem: "17.你知道，西瓜开花后，如果干燥，一般需要：",
	answer_1:"每3天浇一次水",
	answer_2:"每天都浇水",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (4).png'>"
},
{
	problem: "18.同学问你，西瓜是否是一种对水分要求很高的植物呢，你回答道：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (4).png'>"
},
{
	problem: "19.你知道，西瓜属于：",
	answer_1:"雌雄异株植物",
	answer_2:"雌雄同株植物",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (4).png'>"
},
{
	problem: "20.西瓜的雌雄花对你来说很好分辨，你知道：",
	answer_1:"下面带有小西瓜的是雄花",
	answer_2:"雄花和雌花下面都没有小西瓜",
	answer_3:"雄花和雌花下面都有小西瓜",
	answer_4:"下面带有小西瓜的是雌花",
	answer:"4",
	picture:"<img src='./image/develop/develop_watermelon_ (4).png'>"
},
{
	problem: "21.你种的西瓜开了好多漂亮的黄花，你知道：",
	answer_1:"西瓜仅雌花有蜜腺",
	answer_2:"西瓜仅雄花有蜜腺",
	answer_3:"西瓜雌雄花都有蜜腺",
	answer_4:"西瓜花没有蜜腺",
	answer:"3",
	picture:"<img src='./image/develop/develop_watermelon_ (5).png'>"
},
{
	problem: "22.你想知道，西瓜花是否属于虫媒花",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (5).png'>"
},
{
	problem: "23.真想早点吃到自己种的西瓜果实呀，你知道西瓜从播种到收瓜往往需要：",
	answer_1:"70-90天",
	answer_2:"90-120天",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (5).png'>"
},
{
	problem: "24.市场上卖的无籽西瓜，你知道：",
	answer_1:"通常是人工培育出来的",
	answer_2:"通常是野外生长的稀有品种",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_watermelon_ (5).png'>"
},
{
	problem: "25.上网了解到，通常未成熟的西瓜放在水中：",
	answer_1:"会浮起来",
	answer_2:"浮不起来",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_watermelon_ (5).png'>"
},
	{
	problem: "恭喜，你种的西瓜结果啦！",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_watermelon_ (6).png'>"
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