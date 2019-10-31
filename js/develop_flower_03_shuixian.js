$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";	
var information=[
{
	problem: "1.在种植水仙之前，你了解到，水仙属于：",
	answer_1:"单子叶植物",
	answer_2:"双子叶植物",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (1).png'>"
},
{
	problem: "2.你听闻过，水仙还可以分为单瓣型和重瓣型，其中还被叫做&quot金盏玉台&quot的是：",
	answer_1:"单瓣型",
	answer_2:"重瓣型",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (1).png'>"
},
{
	problem: "3.我们常说的&quot水仙花种子&quot其实是水仙花的：",
	answer_1:"果实",
	answer_2:"种子",
	answer_3:"鳞茎",
	answer_4:"叶子",
	answer:"3",
	picture:"<img src='./image/develop/develop_narcissus_ (1).png'>"
},
{
	problem: "4.大家常把水仙花种在水里，你想知道，水仙花是否可以土培：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (1).png'>"
},
{
	problem: "5.你知道，水仙花的别称不包括：",
	answer_1:"金盏银台",
	answer_2:"凌波仙子",
	answer_3:"落神香妃",
	answer_4:"山丹",
	answer:"4",
	picture:"<img src='./image/develop/develop_narcissus_ (1).png'>"
},
{
	problem: "6.不知不觉，水仙发芽了，你知道水培的水仙需要给花盆换水，幼苗期间最好：",
	answer_1:"每周换一次水",
	answer_2:"每1-3天换一次水",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (2).png'>"
},
{
	problem: "7.你想知道水仙的适宜生长温度大概是：",
	answer_1:"8-15度",
	answer_2:"18-26度",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (2).png'>"
},
{
	problem: "8.水仙生长的适宜环境pH值大约是：",
	answer_1:"5-7.5",
	answer_2:"7.5-8.5",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (2).png'>"
},
{
	problem: "9.你好奇水仙是否耐寒：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (2).png'>"
},
{
	problem: "10.水培水仙在生长过程中是否适合添加氮肥：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (2).png'>"
},
{
	problem: "11.水仙又长大了不少，你很好奇从种子到开花需要经历的时长约为：",
	answer_1:"3-4周",
	answer_2:"6-7周",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (3).png'>"
},
{
	problem: "12.有人告诉过你，水仙鳞茎多液汁且有毒，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (3).png'>"
},
{
	problem: "13.有人说过，水养观赏用的水仙通常可以不添加任何肥料，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (3).png'>"
},
{
	problem: "14.水仙能耐半阴，你想知道养水仙是否需要充足的阳光：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (3).png'>"
},
{
	problem: "15.你真期待水仙花开花，你通过查阅知道水仙的花期一般是：",
	answer_1:"春季",
	answer_2:"夏季",
	answer_3:"秋季",
	answer_4:"冬季",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (3).png'>"
},
{
	problem: "16.已经能看到水仙的花蕊了，你很是激动，想知道水培的水仙花在适宜温度下花期能维持的时长是：",
	answer_1:"1-2周",
	answer_2:"2-3周",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (4).png'>"
},
{
	problem: "17.下列不是导致水仙花出现&quot哑花&quot现象的因素的是：",
	answer_1:"水仙球本身质量差",
	answer_2:"养护不当",
	answer_3:"水养季节不当",
	answer_4:"定期更换水培用的水",
	answer:"4",
	picture:"<img src='./image/develop/develop_narcissus_ (4).png'>"
},
{
	problem: "18.有人说过，&quot已开过花的鳞茎再埋到土里，就可以继续生长繁殖&quot，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (4).png'>"
},
{
	problem: "19.有人说过&quot水仙在低温下生长缓慢，可用增温的方法催花&quot，是否正确：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_narcissus_ (4).png'>"
},
{
	problem: "20.你想知道中国水仙是否会结果：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_narcissus_ (4).png'>"
},
{
	problem: "恭喜，你种植的水仙花开出了美丽的花",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_narcissus_ (5).png'>"
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
			if(i%5==0&&i!=20){
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
				if(i==20)alert("恭喜结束");
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
			if(i%5==0&&i!=20){
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
				if(i==20)alert("恭喜结束");
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
			if(i%5==0&&i!=20){
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
				if(i==20)alert("恭喜结束");
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
			if(i%5==0&&i!=20){
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
				if(i==20)alert("恭喜结束");
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