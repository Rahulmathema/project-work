function fallingSnow(){
    function a(){
        if(!document.getElementById("canvas"))
        return void clearInterval(c);
        e.clearRect(0,0,d.width,d.height),
        e.fillStyle="rgba(255, 255, 255, 0.5)",
        e.beginPath();for(var a=0;i>a;a++){
            var g=k[a];if(g.s<o){
                var h=Math.max(g.d/i,n/m);
                e.translate(g.x,g.y),
                e.rotate(-g.a),
                e.drawImage(f[0],-m/2*h,-m/2*h,m*h,m*h),
                e.rotate(g.a),e.translate(-g.x,-g.y)
            }else 
            e.moveTo(g.x,g.y),e.arc(g.x,g.y,g.r,0,2*Math.PI,!0)
        }
e.fill(),b()}
function b(){
    q+=.01;for(var a=0;i>a;a++){
        var b=k[a];
        if(b.y+=Math.cos(q+b.d)+1+b.r/2,b.x+=2*Math.sin(q),b.s<o){
            var c=Math.max(b.d/i,n/m);b.a+=l/c*Math.sin(q)
        }(b.x>d.width+5||b.x<-5||b.y>d.height)&&(a%3>0?k[a]={x:Math.random()*d.width,y:-10,r:b.r,d:b.d,a:b.a,s:b.s}:Math.sin(q)>0?k[a]={x:-5,y:Math.random()*d.height,r:b.r,d:b.d,a:b.a,s:b.s}:k[a]={x:d.width+5,y:Math.random()*d.height,r:b.r,d:b.d,a:b.a,s:b.s})}}
var c,d=document.getElementById("canvas"),e=d.getContext("2d"),f=document.getElementsByClassName("snowflake"),g=window.innerWidth,h=window.innerHeight;d.width=g,d.height=h;for(var i=300,j=0,k=[],l=.05,m=24,n=15,o=15,p=0;i>p;p++)k.push({x:Math.random()*d.width,y:Math.random()*d.height,r:2*Math.random()+1,d:Math.random()*i,a:Math.random()*Math.PI,s:j++});console.log(k);var q=0;c=setInterval(a,33)}
fallingSnow();