

     
 $("#search").submit(function(e){
     e.preventDefault();

     let load = false;
     const skeyword= $("#keyword").val();
     console.log(skeyword)
     $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${skeyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
        type:"GET",
        success: function(data){
            console.log(data)
            data.items.forEach(function(items) {
                const itemslink = `
                <a class="result col-md-12" href="https://www.youtube.com/watch?v=${items.id.videoId}" target="_bank">
                <img src="${items.snippet.thumbnails.medium.url}" alt="">
                <div class="video_info">
                    <h2 class="title">${items.snippet.title}</h2>
                    <p class="description">${items.snippet.description}</p>
                    <span> View</span>
                </div>
                </a>
                `
                $('#result-list').append( itemslink);
                
            });

            window.addEventListener('scroll',function(){
                if(document.documentElement.offsetHeight - window.innerHeight - window.scrollY <= 100){
                    if(!load ){
                        load = true;
                        $.ajax({
                            type: 'GET',
                            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chipu&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${data.nextPageToken}`,
                            

                        })
                    }
                }
                console.log(window.innerHeight, document.documentElement.offsetHeight, window.scrollY);

            })
        },
        error: function(err){
            console.log(err);
        },
    
    })
    $("#keyword").on("input",function(){
    
    });       
})



