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
    console.log(data)
}





// don't forget to un comment the script.js link



//var videoId = data.videoId;
//var videoElement = document.getElementById("test");
//videoElement.src = "https://invidious.ggc-project.de/embed/" + videoId;


/* BDoubleO cubfan135 Docm77 Etho False Grian Hypno impulseSV iskall85 Jevin joehills Keralis MumboJumbo 
rendog Scar Stress Tango Tek TinfoilChef Vintage Beef Welsknight xBCrafted Xisuma ZedaphPlays ZombieCleo */