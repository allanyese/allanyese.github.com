/**
 * Created by Administrator on 2016/11/3.
 */

// Ù–‘
function Web(){
    this.x=0;
    this.y=0
    this.scale=1;
}
//∑Ω∑®
Web.prototype.draw=function(gd){
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    gd.drawImage(JSON['web'],
        22,22,200,200,
        -100,-100,200,200
    );
    gd.restore();
};