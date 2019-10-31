$(document).ready(function(){	
	var judge="#";
	var next=0;
	var blank="##";
var information=[
{
	problem: "1.你从一个苹果中取出苹果种子,接下来,你为了让之后的种子能够发芽,你打算:",
	answer_1:"用微波炉模拟夏季",
	answer_2:"用棉被模拟春季",
	answer_3:"用冰箱模拟冬季",
	answer_4:"用风扇模拟秋季",
	answer:"3",
	picture:"<img src='./image/develop/develop_apple_ (1).png'>"
},
{
	problem: "2.通过查阅资料你了解到,从种子开始种植苹果,从播种到结果一般需要:",
	answer_1:"4-6年",
	answer_2:"8-10年",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (1).png'>"
},
{
	problem: "3.从苹果取出种子后,你打算:",
	answer_1:"去除外面的果肉并晒干",
	answer_2:"直接将种子晒干",
	answer_3:"只去除果肉不晒干",
	answer_4:"不做任何处理",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (1).png'>"
},
{
	problem: "4.详细查询&quot模拟冬季&quot并实践后,在盆中埋下种子时,是否需要添加化肥:",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (1).png'>"
},
{
	problem: "5.在种子埋下,轻轻拍实泥土后,是否需要立即浇水:",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (1).png'>"
},
{
	problem: "6.过了不知多久,在你的悉心呵护下,苹果种子发芽了,为确保幼芽的茁壮成长,你打算:",
	answer_1:"将花盆放在阴凉处,室内温度下培养",
	answer_2:"花盆在窗台,保持或略高于室温下培养",
	answer_3:"将花盆放在窗台,保持37度左右培养",
	answer_4:"花盆放在阴凉处,保持37度左右培养",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (2).png'>"
},
{
	problem: "7.在苹果幼芽发育的时候，你需要：",
	answer_1:"时常观察，注意浇水",
	answer_2:"放在窗台任其生长",
	answer_3:"转移到大的盆栽",
	answer_4:"降低培育温度，避免植物缺水",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (2).png'>"
},
{
	problem: "8.看着还幼小的苹果，你想到，苹果还被叫做：",
	answer_1:"智慧果",
	answer_2:"车厘子",
	answer_3:"菩提子",
	answer_4:"益智",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (2).png'>"
},
{
	problem: "9.苹果是否为蔷薇科植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (2).png'>"
},
{
	problem: "10.苹果是否主要分布于热带：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (2).png'>"
},
{
	problem: "11.看到昔日的苹果种子已经长成这样，你上网学习苹果的种植，了解到：",
	answer_1:"苹果树喜欢被水浸润",
	answer_2:"苹果适合和柏树一起种植",
	answer_3:"苹果成长过程中更喜欢阴凉处",
	answer_4:"苹果树适合栽在相对中性的土壤内",
	answer:"4",
	picture:"<img src='./image/develop/develop_apple_ (3).png'>"
},
{
	problem: "12.在苹果移栽到大盆栽的时候，除了需要挖一个大坑，还需要：",
	answer_1:"除草",
	answer_2:"施肥",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (3).png'>"
},
{
	problem: "13.期待苹果树早日开花，你了解到苹果花一般颜色为：",
	answer_1:"白偏粉",
	answer_2:"粉红",
	answer_3:"红",
	answer_4:"纯白",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (3).png'>"
},
{
	problem: "14.叶螨对于苹果是否为一种益虫：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (3).png'>"
},
{
	problem: "15.随着苹果树的成长，需要的浇水量是否减少：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (3).png'>"
},
{
	problem: "16.看到苹果树已经出现花蕊了，你很是激动，了解到：",
	answer_1:"必须时常浇水，避免花枯死",
	answer_2:"必须开始喷洒农药",
	answer_3:"尽量不要浇水，除非土地干燥",
	answer_4:"需要施加大量的有机肥料",
	answer:"3",
	picture:"<img src='./image/develop/develop_apple_ (4).png'>"
},
{
	problem: "17.你害怕你种的苹果遇到虫害，常见的苹果害虫是：",
	answer_1:"白额高脚蛛",
	answer_2:"面包虫",
	answer_3:"红蜘蛛",
	answer_4:"蟑螂",
	answer:"3",
	picture:"<img src='./image/develop/develop_apple_ (4).png'>"
},
{
	problem: "18.你常听说修剪枝叶是门学问，你了解到：",
	answer_1:"最好晚点修剪苹果幼树",
	answer_2:"苹果幼树需要时常修剪枝叶",
	answer_3:"苹果树变老时，需混有杂草的肥料",
	answer_4:"苹果树从来不需要施肥",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (4).png'>"
},
{
	problem: "19.青苹果是否为未成熟的苹果：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (4).png'>"
},
{
	problem: "20.你种的苹果终于开出茂盛的花了，你知道苹果的花期一般为：",
	answer_1:"4-6月",
	answer_2:"2-4月",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (5).png'>"
},
{
	problem: "21.苹果花期需要注意：",
	answer_1:"人工授粉、蜜蜂授粉",
	answer_2:"施加肥料促进开花",
	answer_3:"几乎都天天浇水",
	answer_4:"在花期前不杀虫，开花后杀虫",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (5).png'>"
},
{
	problem: "22.你真希望你的苹果树早日结果呀，苹果成熟前后，需要：",
	answer_1:"不喷药，避免苹果有毒性",
	answer_2:"施加大量肥料促进结果",
	answer_3:"几乎每天浇水",
	answer_4:"在适当时期喷药杀虫",
	answer:"4",
	picture:"<img src='./image/develop/develop_apple_ (5).png'>"
},
{
	problem: "23.苹果树的果实是否越多越好：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"2",
	picture:"<img src='./image/develop/develop_apple_ (5).png'>"
},
{
	problem: "24.苹果是否为双子叶植物：",
	answer_1:"是",
	answer_2:"否",
	answer_3:"##",
	answer_4:"##",
	answer:"1",
	picture:"<img src='./image/develop/develop_apple_ (5).png'>"
},
	{
	problem: "你种的苹果结果啦！",
	answer_1:"",
	answer_2:"",
	answer_3:"",
	answer_4:"",
	answer:"0",
	picture:"<img src='./image/develop/develop_apple_ (6).png'>"
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
			if(i==5||i==10||i==15||i==19&&i!=24){
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
				if(i==24)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==19&&i!=24){
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
				if(i==24)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==19&&i!=24){
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
				if(i==24)alert("恭喜结束");
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
			if(i==5||i==10||i==15||i==19&&i!=24){
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
				if(i==24)alert("恭喜结束");
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
});//all