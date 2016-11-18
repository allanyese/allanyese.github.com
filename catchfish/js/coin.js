/**
 * Created by Administrator on 2016/11/3.
 */
// Ù–‘
function Coin(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.cur=0;
    this.move();
}
//∑Ω∑®
Coin.prototype.draw=function(gd){
    gd.save();
    gd.translate(this.x,this.y);

    if(this.type==1||this.type==2){
        gd.drawImage(JSON['coinAni1'],
            0,this.cur*60,60,60,
            -30,-30,60,60
        );
    }else if(this.type==3||this.type==4||this.type==5){
        gd.drawImage(JSON['coinAni2'],
            0,this.cur*60,60,60,
            -30,-30,60,60
        );
    }
    gd.restore();
};
Coin.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.x+=(-50-_this.x)/10;
        _this.y+=(650-_this.y)/10;
        _this.cur++;
        if(_this.cur==10){
            _this.cur=0;
        }
    },30);
};
