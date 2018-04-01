$(document).ready(function () {
    var buttons = document.querySelectorAll(".choice");
    var category;
    var about = document.querySelector("#aboutus");
    about.addEventListener("click",()=>{
        document.querySelector("#about").style.display= "flex";
        about.classList.add("nav-active");
    });
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector("#about").style.display= "none";
        about.classList.remove("nav-active");
    });
    buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            var activebtn = document.querySelector(".active");
            if(activebtn!=btn && activebtn){
                activebtn.classList.remove("active");
            }
            console.log(btn.id);
            btn.classList.add("active");
            category=btn.id;
            $.getJSON(`/api/videos/${category}`)
            .then(function(allvideos){
                var num=Math.floor(Math.random()*allvideos.length);
                playurl=allvideos[num].link
                console.log(playurl);
            })
            .catch(function(err){
                console.log(err);
            })

        });
    })
    
    
    $("#add").on("click",function(){
        addVideo();
    });

    
    $(".btn").on("click",()=>{
     
        window.open(playurl,'_blank');
    });
   
});
var playurl;
function addVideo(){
    var link = $("#link").val();
    var category = $("select").val()
    $.post("api/videos",{link: link,category: category})
    .then(function(newVideo){
        $("#link").val("");
        
        console.log(newVideo);
    })
    .catch(function(err){
        alert("ERROR IN THE POST REQUEST");
        console.log(err);
    })
}


