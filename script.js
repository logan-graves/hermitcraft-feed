window.onload = function(){
    fetch("https://invidious.snopyta.org/api/v1/videos/LXb3EKWsInQ")
    .then(response => response.json())
    .then(data => useJSON(data))
}

function useJSON(data) {
    var title = data.title;
    console.log(title);
}