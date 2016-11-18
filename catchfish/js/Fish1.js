/**
 * Created by Administrator on 2016/11/5.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oC = document.getElementById('c1');
    var oF=document.getElementById('footer');
    var gd = oC.getContext('2d');
    var out=50;
    var direction=[-out,out];
    var iNow=7;
    var oW=document.documentElement.clientWidth;
    var oH=document.documentElement.clientHeight;
    oC.width=oW;
    oC.height=oH;
    loadImage(resource,function(){
        //������ɵ��ڵ�
        var arrBullet=[];
        //������ɵ���
        var arrFish=[];
        //��Ž��
        var arrCoin=[];
        //������
        var arrDieFish=[];
        //������
        var arrWeb=[];
        //����
        var c=new Cannon(iNow);
        setInterval(function(){
            //����̨
            gd.clearRect(0,0,oC.width,oC.height);
            gd.drawImage(JSON['bottom'],
                0,0,765,70,
                200,590,765,70
            );
            c.draw(gd);
            //���ڵ�
            for(var i=0;i<arrBullet.length;i++){
                arrBullet[i].draw(gd);
            }

            //�ڵ������Ż�
            for(var i=0;i<arrBullet.length;i++){
                if(arrBullet[i].x<out||arrBullet[i].x>oC.width+out||arrBullet[i].y<out||arrBullet[i].y>oC.height+out){
                    arrBullet.splice(i,1);
                    i--;
                }
            }
            //�����
            if(Math.random()<0.1){
                direction.sort(function(){
                    return Math.random()-0.5;
                });
                if(direction[0]<0){
                    var f1=new Fish(rnd(1,6));
                    f1.x=0-out;
                    f1.y=rnd(out,oC.height-out);
                    f1.rotate=rnd(-45,45);
                    arrFish.push(f1);
                }else{
                    var f1=new Fish(rnd(1,6));
                    f1.x=oC.width+out;
                    f1.y=rnd(out,oC.height-out);
                    f1.rotate=rnd(135,225);
                    arrFish.push(f1);
                }

            }
            //����
            for(var i=0;i<arrFish.length;i++){
                arrFish[i].draw(gd);
            }
            //�����
            for(var i=0;i<arrCoin.length;i++){
                arrCoin[i].draw(gd);
            }
            //������
            for(var i=0;i<arrDieFish.length;i++){
                arrDieFish[i].draw(gd);
            }
            //����
            for(var i=0;i<arrWeb.length;i++){
                arrWeb[i].draw(gd);
                arrWeb[i].scale+=0.01;
                if(arrWeb[i].scale>1.2){
                    arrWeb.splice(i,1);
                    i--;
                }
            }
            //�������Ż� -out ����
            for(var i=0;i<arrFish.length;i++){
                if(arrFish[i].x<-out||arrFish[i].x>oC.width+out||arrFish[i].y<out||arrFish[i].y>oC.height+out){
                    arrFish.splice(i,1);
                    i--;
                }
                //��ײ��� ����
                for(var i=0;i<arrFish.length;i++){
                    for(var j=0;j<arrBullet.length;j++) {
                        if(arrFish[i].isIn(arrBullet[j].x,arrBullet[j].y)){
                            var x=arrFish[i].x;
                            var y=arrFish[i].y;
                            var type=arrFish[i].type;
                            var rotate=arrFish[i].rotate;
                            arrFish.splice(i,1);
                            i--;
                            arrBullet.splice(j,1);
                            j--;
                            //����Ӳ��
                            var coin=new Coin(type);
                            coin.x=x;
                            coin.y=y;
                            arrCoin.push(coin);

                            var oA1=new Audio();
                            oA1.src='fishpic/snd/coin.wav';
                            oA1.play();
                            //����
                            var dieFish=new DieFish(type);
                            dieFish.x=x;
                            dieFish.y=y;
                            dieFish.rotate=rotate;
                            arrDieFish.push(dieFish);
                            setTimeout(function(){
                                arrDieFish.shift();
                            },500);
                            //��������
                            var web=new Web();
                            web.x=x;
                            web.y=y;
                            arrWeb.push(web);
                        }
                    }
                }
            }
        },30);
        //���ת������Ӧ����
        oC.onclick=function(ev){
            var oA=new Audio();
            oA.src='fishpic/snd/cannon.mp3';
            oA.play();
            var x=ev.clientX-oC.offsetLeft- c.x;
            var y=c.y-(ev.clientY-oC.offsetTop) ;
            var d=90-a2d(Math.atan2(y,x));
            c.rotate=d;

            c.emitChange();

            var bullet=new Bullet(c.type);
            bullet.x= c.x;
            bullet.y= c.y;
            bullet.rotate= c.rotate;
            arrBullet.push(bullet);
        };
    });
},false);