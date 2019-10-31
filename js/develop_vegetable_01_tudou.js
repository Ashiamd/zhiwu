$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.打算种土豆的你，知道土豆属于：",
	answer_1:"植物的果实",
	answer_2:"植物的花朵",
	answer_3:"植物的块茎",
	answer_4:"植物的种子",
	answer:"3",
	picture:"<img src='./image/develop/develop_potato_ (1).png'>"
},
{
	problem: "2.你当然知道土豆生长在：",
	answer_1:"地面上",
	answer_2:"地面下",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (1).png'>"
},
{
	problem: "3.别人和你说过，种植土豆需要买种薯，你知道种薯就是：",
	answer_1:"已经发芽的土豆",
	answer_2:"平时超市买的土豆",
	answer_3:"刚挖出的土豆",
	answer_4:"番薯的别称",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (1).png'>"
},
{
	problem: "4.如果买来的种薯个头比较大，需要：",
	answer_1:"直接埋入土中",
	answer_2:"适当切割后埋入土中",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (1).png'>"
},
{
	problem: "5.土豆是否喜欢在较高的温度下生活：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (1).png'>"
},
{
	problem: "6.看到自己的小土豆苗发芽了，你知道栽种土豆时，土壤要保持：",
	answer_1:"湿润",
	answer_2:"干燥",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (2).png'>"
},
{
	problem: "7.土豆的中文学名是：",
	answer_1:"马铃薯",
	answer_2:"洋芋",
	answer_3:"地蛋",
	answer_4:"荷兰薯",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (2).png'>"
},
{
	problem: "8.平时买来的土豆要是发芽了，是否可以食用：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (2).png'>"
},
{
	problem: "9.土豆是否适合施用人畜粪尿或者尿素作为肥料：",
	answer_1:"是，口感会更好",
	answer_2:"否，口感会更差",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (2).png'>"
},
{
	problem: "10.你担心自己种的土豆被害虫吃了，你知道下列不属于常见的土豆害虫的是：",
	answer_1:"马铃薯瓢虫",
	answer_2:"地老虎",
	answer_3:"蚜虫",
	answer_4:"蚯蚓",
	answer:"4",
	picture:"<img src='./image/develop/develop_potato_ (2).png'>"
},
{
	problem: "11.你发觉自己种下的土豆渐渐成长了，你知道，其实还存在彩色的土豆，通常说的彩色土豆不包括的颜色是：",
	answer_1:"紫色",
	answer_2:"白色",
	answer_3:"黑色",
	answer_4:"红色",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (3).png'>"
},
{
	problem: "12.你很好奇的查了彩色土豆的资料，了解到",
	answer_1:"彩色土豆不过是颜色花俏",
	answer_2:"彩色土豆营养成分往往更高",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (3).png'>"
},
{
	problem: "13.你知道，发芽的土豆有毒性是因为含有较多的：",
	answer_1:"龙葵素",
	answer_2:"酒精",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (3).png'>"
},
{
	problem: "14.你知道土豆茎叶生长的最适温度大概是：",
	answer_1:"16-22度",
	answer_2:"10-15度",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (3).png'>"
},
{
	problem: "15.土豆通常种植在：",
	answer_1:"弱碱性土壤内",
	answer_2:"强碱性土壤内",
	answer_3:"强酸性土壤内",
	answer_4:"弱酸性土壤内",
	answer:"4",
	picture:"<img src='./image/develop/develop_potato_ (3).png'>"
},
{
	problem: "16.你感觉自己种的土豆快要开出许多花了，你知道土豆花的颜色一般不包括：",
	answer_1:"淡紫色",
	answer_2:"白色",
	answer_3:"粉偏紫",
	answer_4:"灰色",
	answer:"4",
	picture:"<img src='./image/develop/develop_potato_ (4).png'>"
},
{
	problem: "17.你知道土豆的花期是：",
	answer_1:"春季",
	answer_2:"夏季",
	answer_3:"秋季",
	answer_4:"冬季",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (4).png'>"
},
{
	problem: "18.你想知道土豆开花期间怎么进行浇水：",
	answer_1:"天天浇水",
	answer_2:"土表不干就不浇水",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (4).png'>"
},
{
	problem: "19.你知道，土豆花属于：",
	answer_1:"单性花",
	answer_2:"双性花",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (4).png'>"
},
{
	problem: "20.你想知道通常土豆开花后多久可以采集块茎：",
	answer_1:"30-50天",
	answer_2:"10-20天",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (4).png'>"
},
{
	problem: "21.土豆花真是漂亮，是否有必要摘掉土豆花避免&quot土豆减产&quot：",
	answer_1:"是，土豆花会消耗大量养分",
	answer_2:"否，缺少依据证明土豆花使土豆减产",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_potato_ (5).png'>"
},
{
	problem: "22.马铃薯块茎形成的时期又被叫成：",
	answer_1:"幼苗期",
	answer_2:"发棵期",
	answer_3:"结薯期",
	answer_4:"休眠期",
	answer:"3",
	picture:"<img src='./image/develop/develop_potato_ (5).png'>"
},
{
	problem: "23.土豆开花后是否有结果的阶段：",
	answer_1:"有，不过一般不使其&quot结果&quot",
	answer_2:"无",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_potato_ (5).png'>"
},
{
	problem: "恭喜，你的土豆可以收成啦！",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_potato_ (6).png'>"
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
			if(i==5||i==10||i==15||i==20&&i!=24){
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
				if(i==23)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==20&&i!=24){
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
				if(i==23)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==20&&i!=24){
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
				if(i==23)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==20&&i!=24){
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
				if(i==23)alert("恭喜结束");
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