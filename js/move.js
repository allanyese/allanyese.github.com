//碰撞运动
function move(obj){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		iSpeedY+=3;
		var l=obj.offsetLeft+iSpeedX;
		var t=obj.offsetTop+iSpeedY;
		if(l<0){
			l=0;
			iSpeedX*=-0.8;
			iSpeedY*=0.8;
		}
		if(l>=document.documentElement.clientWidth-obj.offsetWidth){
			l=document.documentElement.clientWidth-obj.offsetWidth;
			iSpeedX*=-0.8;
			iSpeedY*=0.8;	
		}
		if(t<0){
			t=0;
			iSpeedX*=0.8;
			iSpeedY*=-0.8;
		}
		if(t>=document.documentElement.clientHeight-obj.offsetHeight){
			t=document.documentElement.clientHeight-obj.offsetHeight;
			iSpeedX*=0.8;
			iSpeedY*=-0.8;	
		}
		//document.title=iSpeedX;
		
		if(Math.abs(iSpeedX)<1){
			iSpeedX=0;	
		}
		if(Math.abs(iSpeedY)<1){
			iSpeedY=0;	
		}
		if(iSpeedX==0&&iSpeedY==0&&t==document.documentElement.clientHeight-obj.offsetHeight){
			clearInterval(obj.timer);	
		}
		obj.style.left=l+'px';
		obj.style.top=t+'px';
	},30);		
}