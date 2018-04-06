$(document).ready(function () {
    var buttons = document.querySelectorAll(".choice");
    var category;
    var about = document.querySelector("#aboutus");
    document.querySelector("#close-video").addEventListener("click",()=>{
        document.querySelector(".modal-video").style.display="none";
        document.querySelector(".video").src=``;
    });
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
                id=allvideos[num].id
                console.log(id);
            })
            .catch(function(err){
                console.log(err);
            })

        });
    })
    
    
    
    $(".btn").on("click",()=>{
        document.querySelector(".loading").style.display="flex";
        setTimeout(() => {
            document.querySelector(".modal-video").style.display="flex";
            document.querySelector(".loading").style.display="none";
            document.querySelector(".video").src=`https://www.youtube.com/embed/${id}`;
        }, 3000);
        // document.querySelector(".modal-video").style.display="flex";
        // document.querySelector(".video").src=`https://www.youtube.com/embed/${id}`;
    });
   
});
var id;


