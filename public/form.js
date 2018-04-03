$("#add").on("click",function(){
    addVideo();
});
function addVideo(){
    var id = $("#id").val();
    var category = $("select").val()
    $.post("api/videos",{id: id,category: category})
    .then(function(newVideo){
        $("#id").val("");
        
        console.log(newVideo);
    })
    .catch(function(err){
        alert("ERROR IN THE POST REQUEST");
        console.log(err);
    })
}
