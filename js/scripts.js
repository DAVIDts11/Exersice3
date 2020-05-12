var myName={
    firstName: "David" ,
    lastName:"Tsibulsky"
}

var arcQuantity =myName.firstName.length*myName.lastName.length ;
// var list ='<article id="firstLetter" class="changeble"></article>';
var list ='<article id="firstLetter" ></article>';
// var mainHight=arcQuantity/3*200+150;
var nameLenght=myName.firstName.length;


for(var i=1;i<arcQuantity;i++){
    // console.log("da :)")
    list+="<article ></article>";
   // list+='<article class="changeble"></article>';
    }


    
window.onload=function(){
    document.getElementById("layout2Main").innerHTML=list;
    // this.document.getElementById("layout2Main").style.height=mainHight+"px";
     
    document.getElementById("darkButton").onclick=function(){
        // console.log("You've just clicked button 'dark'");
        for (i=0;i<nameLenght;i++)
            document.getElementsByTagName("article")[i].style.backgroundColor="red";
            // document.getElementsByClassName("changeble")[i].style.backgroundColor="red";
    }

    document.getElementById("brightButotn").onclick=function(){
        // console.log("You've just clicked button 'bright'");
        for (i=0;i<nameLenght;i++)
            document.getElementsByTagName("article")[i].style.backgroundColor="floralwhite";
            // document.getElementsByClassName("changeble")[i].style.backgroundColor="floralwhite";
    }

}