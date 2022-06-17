
var data= false
function changeFont(){
    var para = document.getElementById("demo");
    if(!data){
        para.style.fontFamily = "Segoe-Script";
        para= true;
    }
   
   else{
     para.style.fontFamily = "Impact,Charcoal,sans-serif";
     para=false;
   }
}




function changeStyle(){
    var paragraph = document.getElementById("para");
    paragraph.style.backgroundColor = "cyan";
    paragraph.style.fontSize= "50px";
}


 function changePage() {
    window.location.href="./public/html/page-1.html";
 }

 let para = document.getElementById("para");
 para.onmouseover = function(){
    para.innerText = "je suis un délicieux burger"
 }

 para.onmouseleave = function(){
    para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi cupiditate repellendus minima neque eligendi accusamus? Cumque ipsam iure aspernatur"
 }
