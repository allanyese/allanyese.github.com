  	function a2d(n){
		return n*180/Math.PI;
	}
	function rnd(n,m){
	    return Math.floor(Math.random()*(m-n)+n);
    }
 window.onload =function(){
 	//开始头部start
 	(function(){
 		var oStart= document.getElementById('start');
 		var aImg = oStart.getElementsByTagName('img');
 		var oNav= document.getElementById('nav');
 		var oNav_item= document.getElementById('nav_item');
 		var top= oNav.offsetTop;
 		var n=0;
 			setInterval(function(){
 				move(aImg[n],{opacity:0},{duration:3000});
 				n++;
 				if(n>2){
 					n=0;	
 				};
 				move(aImg[n],{opacity:1},{duration:3000});
 			},5000);
 			 window.onscroll=function(){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop>top){
                    oNav.style.position='fixed';
                    oNav.style.top='0';
                    oNav.style.left='0';
                    oNav_item.style.display='block';

                }else{
                    oNav.style.position='static';
                    oNav_item.style.display='none';
                }
            };
 	})();
 	//滚动条运动
 	(function(){

				var oNav=document.getElementById('nav');
				var aA=oNav.getElementsByTagName('a');
				var timer=null;
				for(var i=0;i<aA.length;i++){
					aA[i].index=i;
					aA[i].onclick=function(){
						//var _this=this;
						var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
						var start=scrollTop;
						var dis=700*this.index-start;
						var count=parseInt(3000/30);
						var n=0;
						clearInterval(timer);
						timer=setInterval(function(){
							n++;
							var a=1-n/count;
							var cur=start+dis*(1-a*a*a);
							document.documentElement.scrollTop=document.body.scrollTop=cur;
							if(n==count){
									clearInterval(timer);
								}
						},30);
						/*var _this=this;
						setTimeout(function(){
							for(var i=0; i<aA.length; i++){
								aA[i].style.background='#333';
							}
							_this.style.background='red';
						},3000);*/
					};
					
				};
 	})();
 	//侧栏时间
 
 	(function(){
 		var oTime_r= document.getElementById('time_r');
 		var oTime_btn = document.getElementById('time_btn');
 		var oTab = document.getElementById('tab');
        var aBtn = oTab.getElementsByTagName('li');
        var aH = oTab.getElementsByTagName('h2');
        var oClock = document.querySelector('.clock');
		var oHou = document.querySelector('.hou');
		var oMin = document.querySelector('.min');
		var oSec = document.querySelector('.sec');
		var oCl_p=document.querySelector('#cl_p');
        var oDate= new Date();
        var m= oDate.getMonth()+1;
 		oTime_btn.onmouseenter=function(){
 			oTime_btn.style.opacity=1;
 			oTime_btn.style.transition='1s all ease';
 			oTime_btn.style.transform='rotate(360deg)';
 			move(oTime_r,{ width:270});
 			oTab.style.display='block';
 			oClock.style.display='block';
 		};
 		oTime_r.onmouseleave= function(){
 			move(oTime_r,{width:0});
 			oTime_btn.style.opacity=0.5;
 			oTime_btn.style.transform='rotate(-360deg)';
 			oTab.style.display='none';
 			oClock.style.display='none';
 		};
 		for(var i=0; i<aBtn.length; i++){
 			if(aH[i].innerHTML==m){
 				aBtn[i].className='active';
 			}
 		}
 		var N = 60;
	for(var i=0;i<N;i++){
		var oS = document.createElement('span');
		
		oS.style.WebkitTransform = 'rotate('+i*6+'deg)';
		oS.style.transform = 'rotate('+i*6+'deg)';
		
		if(i%5==0){
			oS.className = 'big_scale';
			oS.innerHTML = '<i>'+(i/5||12)+'<\/i>';
			var oI = oS.children[0];
			oI.style.WebkitTransform = 'rotate('+-i*6+'deg)';
			oI.style.transform = 'rotate('+-i*6+'deg)';
		}
		
		oClock.appendChild(oS);
	}
	function clock(){
		var arr=['日','一','二','三','四','五','六'];
		var oDate = new Date();
		var y = oDate.getFullYear();
		//var mo = oDate.getMonth();
		var r = oDate.getDate();
		var h = oDate.getHours();
		var f = oDate.getMinutes();
		var s = oDate.getSeconds();
		var week = oDate.getDay();
		//var ms = oDate.getMilliseconds();
		
		oHou.style.WebkitTransform = 'rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.WebkitTransform = 'rotate('+(f*6+s/60*6)+'deg)';
		oSec.style.WebkitTransform = 'rotate('+s*6+'deg)';
		oHou.style.transform = 'rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.transform = 'rotate('+(f*6+s/60*6)+'deg)';
		oSec.style.transform = 'rotate('+s*6+'deg)';
		oCl_p.innerHTML=''+y+'-'+m+'-'+r+' 星期'+arr[week]+'';
	}
	clock();
	setInterval(clock,1000);
 	})();
 	(function(){
 		var oIn_btn= document.getElementById('in_btn');
 		var oSh= document.getElementById('shadow');
 		var oSd= document.querySelector('.sd_box');
 		var oWel= document.querySelector('.wel');
 		oIn_btn.onclick=function(){
 			//alert(1);
 			move( oSh,{height:0},{duration:1000});
 			//console.log()
 			move(oSd,{height:0},{duration:1000});
 		};
 	})();
 	(function(){
 		var oPrev = document.querySelector('.prev_btn');
		var oNext = document.querySelector('.next_btn');
		var aA = document.querySelectorAll('.works a');
		
		var aClass = [];
		for(var i=0;i<aA.length;i++){
			aClass[i] = aA[i].className;
		}
		
		var bOk = false;
		
		oPrev.onclick = function(){
			if(bOk)return;
			bOk = true;
			aClass.push(aClass.shift());
			change();
		};
		oNext.onclick = function(){
			if(bOk)return;
			bOk = true;
			aClass.unshift(aClass.pop());
			change();
		};
		function change(){
			for(var i=0;i<aA.length;i++){
				aA[i].style.WebkitTransition = '.5s all ease';
				aA[i].style.transition = '.5s all ease';
				aA[i].className = aClass[i];
			}
			
			var oCur = document.querySelector('.cur');
			function tranEnd(){
				oCur.removeEventListener('transitionend',tranEnd,false);
				bOk = false;
			}
			oCur.addEventListener('transitionend',tranEnd,false);
			
	}
 	})();
 	(function(){
	 	//alert(aA.length);
		//分成0 1 2 3, 4个方向
	 	function hoverDir(ev,obj){
			var a = ev.pageX-obj.offsetLeft-obj.offsetWidth/2;
			var b = obj.offsetTop+obj.offsetHeight/2-ev.pageY;
			
			return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
		}
function through(obj){
	var oS = obj.children[0];
	obj.onmouseenter = function(ev){
		//alert(1);
		var oEvent = ev||event;
		var dir = hoverDir(oEvent,obj);
		console.log(dir);
		switch(dir){
			case 0:
				//左
				oS.style.left = '-250px';
				oS.style.top = 0;
				break;
			case 1:
				//下
				oS.style.left = 0;
				oS.style.top = '220px';
				break;
			case 2:
				//右
				oS.style.left = '250px';
				oS.style.top = 0;
				break;
			case 3:
				//上
				oS.style.left = 0;
				oS.style.top = '-220px';
				break;
		}
		move(oS,{left:0,top:0});
	};
	obj.onmouseleave = function(ev){
		var oEvent = ev||event;
		var dir = hoverDir(oEvent,obj);
		switch(dir){
			case 0:
				move(oS,{left:-250,top:0});
				break;
			case 1:
				move(oS,{left:0,top:220});
				break;
			case 2:
				move(oS,{left:250,top:0});
				break;
			case 3:
				move(oS,{left:0,top:-220});
				break;
		}
	};
}
	var aA= document.querySelectorAll('.through a');
	for(var i=0;i<aA.length;i++){
		through(aA[i]);
	}
 	})();
 	//旋转  3D图片环
 	(function(){
 		var oLife=document.querySelector('.life');
 		var oAn=document.querySelector('.animal');
 		var oC=document.querySelector('.content3');
 		var oF=document.querySelector('.page_boxf');
 		var oB=document.querySelector('.page_boxb');
 		var oA1=document.querySelector('.page_boxf a');
 		var oA2 = document.querySelector('.page_boxb a');
 		var bOk=false;
 		oLife.onclick=function(){
 			//alert(1); 爆炸效果页面
 			oB.style.display='none';
 			oC.style.transition='.4s all ease';
 			oC.style.transform='perspective(800px) rotateY(-180deg)';
 		};
 		//3D图片页面
 		oAn.onclick=function(){
 			bOk=!bOk;
 			oF.style.display='none';
 			oB.style.display='block';
 			oC.style.transition='.4s all ease';
 			oC.style.transform='perspective(800px) rotateY(180deg)';
 		};
 		oA2.onclick=function(){
 			bOk=false;
 			oF.style.display='block';
 			oC.style.transition='.4s all ease';
 			oC.style.transform='perspective(800px) rotateY(0deg)';
 		};
 		oA1.onclick=function(){
 			
 			oC.style.transition='.4s all ease';
 			oC.style.transform='perspective(800px) rotateY(0deg)';
 		};

 		function ring(){
 			var oUl = document.querySelector('.page_boxb ul');
			var aLi = oUl.children;
			var N = 11;
			for(var i=0;i<N;i++){
				aLi[i].style.WebkitTransition = '1s all ease '+(N-i)*100+'ms';
				
				aLi[i].style.WebkitTransform = 'rotateY('+360/N*i+'deg) translateZ(350px)';
			}
			//拖拽 惯性旋转
			//获取不到transform的值，用数字模拟
			var x = 0; 			//x轴角度
			var y = 0; 			//y轴角度
			var iSpeedX = 0;
			var iSpeedY = 0;
			var lastX = 0;
			var lastY = 0;
			oUl.onmousedown = function(ev){
				var disX = ev.pageX-y;
				var disY = ev.pageY-x;
				document.onmousemove = function(ev){
					x = ev.pageY-disY;
					y = ev.pageX-disX;
					
					oUl.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
					iSpeedX = ev.pageX-lastX;
					iSpeedY = ev.pageY-lastY;
					lastX = ev.pageX;
					lastY = ev.pageY;
				};
				document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
					clearInterval(oUl.timer);
					oUl.timer = setInterval(function(){
						x+= iSpeedY;
						y+= iSpeedX;
						oUl.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
						iSpeedX*=0.95;//摩擦系数 逐渐使速度降下来 再清除定时器
						iSpeedY*=0.95;
						if(Math.abs(iSpeedX)<1)iSpeedX=0;
						if(Math.abs(iSpeedY)<1)iSpeedY=0;
						if(iSpeedX==0&&iSpeedY==0){
							clearInterval(oUl.timer);
						}
					},30);
				};
				return false;
	};
 		}
 		function fnEnd(){
 			if(bOk){
 					ring();
 			}
 		}
 			oC.addEventListener('transitionend',fnEnd,false);
 	})();
 	(function(){
 		var oBox = document.querySelector('.box');
		var C = 10;
		var R = 10;
		oBox.style.backgroundImage='url(img3/2.jpg)';
		for(var i=0;i<C;i++){
		for(var j=0;j<R;j++){
			//span 布局
			var oS = document.createElement('span');
			oS.className='on';
			oS.style.width = oBox.offsetWidth/C+'px';
			oS.style.height = oBox.offsetHeight/R+'px';
			oBox.appendChild(oS);
			oS.style.left = i*oS.offsetWidth+'px';
			oS.style.top = j*oS.offsetHeight+'px';
			oS.style.backgroundPosition = '-'+i*oS.offsetWidth+'px -'+j*oS.offsetHeight+'px';
		}
	}
	var aS = oBox.children;
	var bOk = false;
	var iNow = 0;
	oBox.onclick = function(){
		if(bOk)return;
		bOk = true;
		iNow++;
		for(var i=0;i<aS.length;i++){
			aS[i].style.WebkitTransition = '1s all ease';
			
			var x = aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
			var y = aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;
			
			aS[i].style.WebkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg)';
			aS[i].style.opacity = 0;
		}
		
		function tranEnd(){
			aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
			for(var i=0;i<aS.length;i++){
				
				aS[i].style.WebkitTransition = 'none';
				
				aS[i].style.backgroundImage = 'url(img3/'+(iNow%3+1)+'.jpg)';
				oBox.style.backgroundImage = 'url(img3/'+((iNow+1)%3+1)+'.jpg)';
				
				
				aS[i].style.WebkitTransform = ' perspective(800px) translate(0,0) rotateY(0) rotateX(0)';
				aS[i].style.opacity = 1;
			}
			bOk = false;
		}
		aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
	 };
 	})();
 	(function(){
 		var oPage1=document.querySelector('.page_son1');
 		var oPage2=document.querySelector('.page_son2');
 		var oPage3=document.querySelector('.page_son3');
 		var oPage4=document.querySelector('.page_son4');
 		//var bOk=false;点击添加class名
 		oPage1.onclick=function(){
 		
 			this.classList.add('zoomInDown');
 		
 			}
 			//animationend事件 事件绑定添加
 		oPage1.addEventListener('animationend',function(){
 			oPage1.classList.remove('zoomInDown');
 		},false);
 		oPage2.onclick=function(){
 		
 			this.classList.add('fadeInLeftBig');
 		
 			}
 		oPage2.addEventListener('animationend',function(){
 			oPage2.classList.remove('fadeInLeftBig');
 		},false);
 		oPage3.onclick=function(){
 		
 			this.classList.add('rotateInUpLeft');
 		
 			}
 		oPage3.addEventListener('animationend',function(){
 			oPage3.classList.remove('rotateInUpLeft');
 		},false);
 		oPage4.onclick=function(){
 		
 			this.classList.add('bounceOutDown');
 		
 			}
 		oPage4.addEventListener('animationend',function(){
 			oPage4.classList.remove('bounceOutDown');
 		},false);
 	})();

 	(function(){
 		var oUl=document.getElementById('phone_ul');
 		var aLi=oUl.getElementsByTagName('li');
 		var	oI1=document.getElementById('i1');
 		var	oI2=document.getElementById('i2');
 		var iNow=1;
 		var bOk=false;
 		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
 		oUl.style.left=-iNow*aLi[0].offsetWidth+'px';
 		oI2.onclick=function(){
 			if(bOk)return;
 			bOk=true;
 			iNow++;
 			//oUl.style.left=-aLi[0].offsetWidth*iNow+'px';
 			move(oUl,{left:-aLi[0].offsetWidth*iNow},{complete:function(){
 				if(iNow==aLi.length-1){
 				iNow=1;
 			   oUl.style.left=-iNow*aLi[0].offsetWidth+'px';
 			   }
 			bOk=false;
 			}});
 		};
 		oI1.onclick=function(){
 			if(bOk)return;
 			bOk=true;
 			iNow--;
 			move(oUl,{left:-aLi[0].offsetWidth*iNow},{complete:function(){
 					if(iNow==0){
			  		iNow=aLi.length-2;//瞬间回到length-2个
			  		oUl.style.left=-aLi[0].offsetWidth*iNow+'px'
			  	}
 				bOk=false;
 			}});
 			};
 	})();
 	(function(){
 		var oC=document.querySelector('.content5');
 		var oSkill= document.querySelector('.skill');
 		var aSpan=document.querySelectorAll('.skill_ul li span');
 		var kH=document.documentElement.clientHeight;
 		var arr=[
 				oSkill.offsetWidth*0.9,
 				oSkill.offsetWidth*0.6,
 				oSkill.offsetWidth*0.5,
 				oSkill.offsetWidth*0.1
 		];
 		//事件绑定添加滚动条事件避免和吸顶条冲突
 		window.addEventListener('scroll',function(){
 			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
 			var h=oC.offsetTop;
 			for(var i=0; i<aSpan.length; i++){
 			    if(kH+scrollTop>h+250){
 			    	aSpan[i].style.transition='2s all ease';
 			    	aSpan[i].style.width=arr[i]+'px';
 			  }
 			}
 		},false);
 	})();
 	(function(){
 		var oTxt= document.querySelector('.txtCon');
 		var oTxt2= document.querySelector('.txtCon2');
 		var oTxt3= document.querySelector('.txtCon3');
 		var oTxt4= document.querySelector('.txtCon4');
 		var oUl=document.querySelector('.skill_ul');
 		var oLl1=oUl.children[0];
 		var oLl2=oUl.children[1];
 		var oLl3=oUl.children[2];
 		var oLl4=oUl.children[3];
 		var fx = Tween.Back.easeInOut;
 		var oBtn=document.getElementById('info_btn');
 		var oInfo=document.getElementById('info_box');
 		oLl1.onclick=function(){
		  doMove(oTxt,{right:300},{easing:fx});
		  oTxt2.style.right='-400px';
		  oTxt3.style.right='-300px';
		  oTxt4.style.right='-300px';

 		};
 		oLl2.onclick=function(){
		  doMove(oTxt2,{right:300},{easing:fx});
		  oTxt.style.right='-300px';
		  oTxt3.style.right='-300px';
		  oTxt4.style.right='-300px';
 		};
 		oLl3.onclick=function(){
		  doMove(oTxt3,{right:300},{easing:fx});
		  oTxt.style.right='-300px';
		  oTxt2.style.right='-400px';
		  oTxt4.style.right='-300px';
 		};
 		oLl4.onclick=function(){
		  doMove(oTxt4,{right:300},{easing:fx});
		  oTxt.style.right='-300px';
		  oTxt2.style.right='-400px';
		  oTxt3.style.right='-300px';
 		};
 		oBtn.onclick=function(){
 			if(oInfo.style.top=='482px'){
 				doMove(oInfo,{top:682},{easing:fx});
 			}else{
 				doMove(oInfo,{top:482},{easing:fx});
 			}

 		};
 	})();
 };