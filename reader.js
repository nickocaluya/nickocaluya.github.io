$(document).ready(function(){
    $("#button").click(function(){
         $.ajax({
            url : "screen.TXT",
            dataType: "text",
            success : function (data) {
            console.log(data)
               var lines = data.split(",")
                for (var i = 0; i < lines.length; i++) {
                    var img = $('<img class="dynamic">'); 
                    img.attr('src', lines[i]);
                    img.appendTo('#imageDiv');
                }
            }
        });         
     });
})