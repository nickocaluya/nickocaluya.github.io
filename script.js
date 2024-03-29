const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
	post.addEventListener('click', () => {
		//Get original image URL
		const imgUrl = post.firstElementChild.src.split("?")[0];
		//Open image in new tab
		window.open(imgUrl, '_blank');
	});
});

/*
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
*/