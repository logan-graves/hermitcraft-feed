/*
* Recommended params method: 
* var url = new URL("https://geo.example.org/api"),
*     params = {lat:35.696233, long:139.570431}
* Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
* fetch(url).then(...)
* 
* But I just encoded it myself :)
*/

window.onload = function(){
    fetch(`https://invidious.snopyta.org/api/v1/search?q=Hermitcraft&type=video`)
    .then(response => response.json())
    .then(data => useJSON(data));
}

function useJSON(data) {
    console.log(data);
    var x = 0;
    for (i of data) {
        x = x + 1;
        var workingVideo = data[x];
        if (x == 7) {
            break;
        } else {
            var popularDiv = document.getElementById("popular");
            
            // Create Greater Div (Div that holds iframe and title)
            var greaterDiv = document.createElement("div");
            greaterDiv.setAttribute("class", "greaterDiv");
            popularDiv.appendChild(greaterDiv);
            
            //Create video div (div that holds the iframe)
            var videoDiv = document.createElement("div");
            videoDiv.setAttribute("class", "videoDiv");
            greaterDiv.appendChild(videoDiv)
            
            //Create iframe
            var iframe = document.createElement("iframe")
            iframe.setAttribute("src", "https://invidious.fdn.fr/embed/" + workingVideo.videoId);
            videoDiv.appendChild(iframe);

            //Create Link for video 
            var videoLink = document.createElement("a")
            videoLink.setAttribute("href", "https://www.yewtu.be/watch?v=" + workingVideo.videoId)
            greaterDiv.appendChild(videoLink)
            
            //Create video Title element
            var videoTitle = document.createElement("p");
            videoTitle.setAttribute("class", "videoTitle");
            videoTitle.textContent = workingVideo.title;
            //put the video title inside of the A element
            videoLink.appendChild(videoTitle);

            //Create author Element
            var author = document.createElement("p");
            author.setAttribute("class", "author");
            author.textContent = workingVideo.author;
            greaterDiv.appendChild(author);
        }
    }
}

/* BDoubleO cubfan135 Docm77 Etho False Grian Hypno impulseSV iskall85 Jevin joehills Keralis MumboJumbo 
rendog Scar Stress Tango Tek TinfoilChef Vintage Beef Welsknight xBCrafted Xisuma ZedaphPlays ZombieCleo */