var img=[];
var curimg=0;
function Load_image(){
    for(i=1;i<4;i++){
        img[i]=new Image();
        img[i].src="/anh_index/khanh"+i+".jpg";
    }
}
function next(){
    if(curimg<img.length-1){
        curimg++;
        document.getElementById("khanh").src=img[curimg].src;
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}
function back(){
    if(curimg>0){
        curimg--;
        document.getElementById("khanh").src=img[curimg].src;
    }
    if(curimg==0){
        curimg=img.length-1;
    }
}
 
    