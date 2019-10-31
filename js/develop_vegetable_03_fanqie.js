$(document).ready(function(){		
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.想种番茄的你，知道番茄品种极多，品种不同颜色也可能不同，其中不包括：",
	answer_1:"红色",
	answer_2:"紫色",
	answer_3:"黄色",
	answer_4:"蓝色",
	answer:"4",
	picture:"<img src='./image/develop/develop_tomato_ (1).png'>"
},
{
	problem: "2.别人告诉过你，番茄有2种生长方式，其中往往向上生长且高度通常在120米以下的称为：",
	answer_1:"丛生型",
	answer_2:"蔓生型",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (1).png'>"
},
{
	problem: "3.如果你决定自己从新鲜的番茄中获取种子，那么你需要将种子：",
	answer_1:"直接晒干",
	answer_2:"清洗掉果肉和其他附着物后风干",
	answer_3:"去除附着物后直接使用",
	answer_4:"不做任何处理",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (1).png'>"
},
{
	problem: "4.如果是自己从番茄中取出的种子，是否有必要给种子消毒：",
	answer_1:"是，可以消灭可能生长的病菌",
	answer_2:"否，纯粹浪费时间",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (1).png'>"
},
{
	problem: "5.你想知道番茄是否为喜欢阳光的植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (1).png'>"
},
{
	problem: "6.番茄终于发芽了，你知道番茄喜好的土壤类型为：",
	answer_1:"弱碱性",
	answer_2:"弱酸性",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (2).png'>"
},
{
	problem: "7.你之前没注意，后面查了资料了解到种子发芽通常每天需要的光照时间至少为：",
	answer_1:"6-8小时",
	answer_2:"3-5小时",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (2).png'>"
},
{
	problem: "8.你知道，通常发芽的嫩叶要转变成真正的叶子需要：",
	answer_1:"三个月",
	answer_2:"一个月",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (2).png'>"
},
{
	problem: "9.你想知道，番茄是否需要生长在有机物质丰富的环境内：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (2).png'>"
},
{
	problem: "10.你知道，番茄的别名不包括：",
	answer_1:"西红柿",
	answer_2:"洋柿子",
	answer_3:"柿子",
	answer_4:"蕃柿",
	answer:"3",
	picture:"<img src='./image/develop/develop_tomato_ (2).png'>"
},
{
	problem: "11.番茄苗长大了不少，你想知道，下列不属于常见的番茄害虫的是：",
	answer_1:"棉铃虫",
	answer_2:"甘蓝夜蛾",
	answer_3:"蟑螂",
	answer_4:"甜菜夜蛾",
	answer:"3",
	picture:"<img src='./image/develop/develop_tomato_ (3).png'>"
},
{
	problem: "12.你想知道，大多数自然的番茄品种是否耐寒：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (3).png'>"
},
{
	problem: "13.有人告诉过你，番茄的原产地是：",
	answer_1:"中国",
	answer_2:"非洲",
	answer_3:"欧洲",
	answer_4:"南美洲",
	answer:"4",
	picture:"<img src='./image/develop/develop_tomato_ (3).png'>"
},
{
	problem: "14.番茄茁壮到可以放在室外后，长到了某一高度后一般需要修剪掉最低的枝条，这一高度是：",
	answer_1:"15cm",
	answer_2:"25cm",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (3).png'>"
},
{
	problem: "15.番茄种植是否有必要经常添加少量的有机肥：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (3).png'>"
},
{
	problem: "16.你看到自己的番茄花蕊了，你知道，通常红番茄的花的颜色为：",
	answer_1:"黑色",
	answer_2:"蓝色",
	answer_3:"黄色",
	answer_4:"白色",
	answer:"3",
	picture:"<img src='./image/develop/develop_tomato_ (4).png'>"
},
{
	problem: "17.你知道，番茄的花期一般是：",
	answer_1:"夏秋季",
	answer_2:"春夏季",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (4).png'>"
},
{
	problem: "18.你知道，番茄开花期间，温度调节很重要，下列比较合理的是：",
	answer_1:"白天12-14度，晚上24-26度",
	answer_2:"白天30-37度，晚上12-14度",
	answer_3:"白天24-26度，晚上12-14度",
	answer_4:"白天和晚上都是24-26度",
	answer:"3",
	picture:"<img src='./image/develop/develop_tomato_ (4).png'>"
},
{
	problem: "19.你想知道，番茄花是否属于虫媒花：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (4).png'>"
},
{
	problem: "20.你想知道如何分辨番茄的雌雄花，其中花蕊下有相对肿起的是：",
	answer_1:"雄蕊",
	answer_2:"雌蕊",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (4).png'>"
},
{
	problem: "21.开花了，意味着，番茄以后也就要结果了，你知道：",
	answer_1:"有必要修剪一些多余的枝叶",
	answer_2:"没必要破坏番茄的枝叶",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (5).png'>"
},
{
	problem: "22.在没有人工授粉的前提下，番茄开花期间如果没有经常刮轻风，也没有蜜蜂蝴蝶来往，可能导致：",
	answer_1:"番茄长得越来越好",
	answer_2:"番茄只开花不结果",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (5).png'>"
},
{
	problem: "23.你想知道，番茄在初花期是否有必要杀虫：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (5).png'>"
},
{
	problem: "24.要是你种的番茄出现了落花落果的现象，该考虑：",
	answer_1:"喷洒防落素等物质",
	answer_2:"直接采摘下来食用果实",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_tomato_ (5).png'>"
},
{
	problem: "25.你知道，红番茄未成熟前，常是：",
	answer_1:"鲜红色",
	answer_2:"青绿色",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_tomato_ (5).png'>"
},
	{
	problem: "恭喜，你种的番茄可以收成啦！！",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_tomato_ (6).png'>"
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