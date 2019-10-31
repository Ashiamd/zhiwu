$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.种葡萄啦，你知道如何挑选种子，把种子扔进水里：",
	answer_1:"健康的会浮起来",
	answer_2:"不健康的外表有浅灰或白的胚乳",
	answer_3:"健康的种子是硬的",
	answer_4:"所有种子都会浮起来",
	answer:"3",
	picture:"<img src='./image/develop/develop_grape_ (1).png'>"
},
{
	problem: "2.别人问过你，是否存在白色的葡萄，你回答：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (1).png'>"
},
{
	problem: "3.你知道如何处理种子：",
	answer_1:"保留果肉，用清水洗",
	answer_2:"洗掉果肉和其他东西",
	answer_3:"用烧开的热水倒在种子上",
	answer_4:"直接放在外面晒干",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (1).png'>"
},
{
	problem: "4.大自然中许多种子需要经历寒冷才能开始发芽，葡萄是否也如此：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (1).png'>"
},
{
	problem: "5.你知道，葡萄萌芽通常需要经过：",
	answer_1:"2-8周的时间",
	answer_2:"6-12周的时间",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (1).png'>"
},
{
	problem: "6.你知道，眼前的葡萄幼苗需要你的细心呵护，你害怕自己的葡萄幼苗被害虫缠身，下列不属于常见葡萄害虫的是：",
	answer_1:"葡萄虎蛾",
	answer_2:"葡萄天蛾",
	answer_3:"萄虎天牛",
	answer_4:"马陆",
	answer:"4",
	picture:"<img src='./image/develop/develop_grape_ (2).png'>"
},
{
	problem: "7.葡萄是否属于双子叶植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (2).png'>"
},
{
	problem: "8.你知道，葡萄有很多别称，下列不属于葡萄的别称的是：",
	answer_1:"草龙珠",
	answer_2:"蒲陶",
	answer_3:"赐紫樱桃",
	answer_4:"牛肚子果",
	answer:"4",
	picture:"<img src='./image/develop/develop_grape_ (2).png'>"
},
{
	problem: "9.你知道，春天发芽时，葡萄喜欢的温度通常为：",
	answer_1:"7-12度",
	answer_2:"20-25度",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (2).png'>"
},
{
	problem: "10.有人告诉你，葡萄在生长期需水量较多，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (2).png'>"
},
{
	problem: "11.眼前的葡萄苗长大了不少，葡萄转移到大的土地种植，往往是：",
	answer_1:"幼苗高于10cm时",
	answer_2:"幼苗高于30cm时",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (3).png'>"
},
{
	problem: "12.你了解到不同品种的葡萄需要不同pH的土壤种植，其中酿酒用的葡萄大多种在：",
	answer_1:"pH为5.5-6.0的土壤",
	answer_2:"pH为6.5-7.0的土壤",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (3).png'>"
},
{
	problem: "13.你知道葡萄成长过程中需要架子支撑，一般选用的材质为：",
	answer_1:"金属质",
	answer_2:"竹或木质",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (3).png'>"
},
{
	problem: "14.在葡萄藤生长的时期，是否需要时常修剪枝叶：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (3).png'>"
},
{
	problem: "15.基肥是葡萄园施肥中最重要的一环，你知道，基肥通常施入的季节为：",
	answer_1:"春季",
	answer_2:"夏季",
	answer_3:"秋季",
	answer_4:"冬季",
	answer:"3",
	picture:"<img src='./image/develop/develop_grape_ (3).png'>"
},
{
	problem: "16.你感觉到葡萄快开花了，你知道，葡萄花期通常为：",
	answer_1:"4-5月",
	answer_2:"6-7月",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (4).png'>"
},
{
	problem: "17.葡萄开花的期间，通常使用的肥料为：",
	answer_1:"镁肥",
	answer_2:"硼肥和锌肥",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (4).png'>"
},
{
	problem: "18.你看到自己的葡萄苗，知道葡萄花的特点：",
	answer_1:"通常小又白",
	answer_2:"通常大又白",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (4).png'>"
},
{
	problem: "19.开花期的葡萄，是否需要大量施肥：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (4).png'>"
},
{
	problem: "20.葡萄成长因对某种元素需求量显著超过其他果树而被称为&quotX&quot质果树，你知道这是：",
	answer_1:"铁元素",
	answer_2:"镁元素",
	answer_3:"钙元素",
	answer_4:"钾元素",
	answer:"4",
	picture:"<img src='./image/develop/develop_grape_ (4).png'>"
},
{
	problem: "21.你种下的葡萄开了不少花，你想知道葡萄是否属于虫媒花：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (5).png'>"
},
{
	problem: "22.你想知道葡萄花期一般维持多久：",
	answer_1:"6-7天",
	answer_2:"2-3天",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (5).png'>"
},
{
	problem: "23.同学告诉你，栽种的葡萄花通常为完全花，可以自花授粉，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_grape_ (5).png'>"
},
{
	problem: "24.你上网了解到，葡萄结果的月份通常为：",
	answer_1:"8-9月",
	answer_2:"5-7月",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (5).png'>"
},
{
	problem: "25.葡萄成熟前是否需要经常浇水：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_grape_ (5).png'>"
},
	{
	problem: "恭喜，你的葡萄结果啦！",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_grape_ (6).png'>"
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