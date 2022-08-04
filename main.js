const container = document.querySelector(".container")


//search bar & button

let searchUrl = 'https://itunes.apple.com/search?term='

let form = document.querySelector('.searchBar')
form.addEventListener('submit', function(event) {
    let typeBox = document.querySelector('.typeBox')
    event.preventDefault()
    fetchyFetch(searchUrl + typeBox.value)
})

//Results Area with class
let resultsArea = document.createElement('div')
resultsArea.classList.add('resultsBar')
resultsArea.innerText = 'Search Results:'
container.appendChild(resultsArea)

let displayArea = document.createElement('div')
displayArea.classList.add('displayArea')
container.appendChild(displayArea)

//fetch stuff
function fetchyFetch(searchUrl){
    console.log (searchUrl)
    fetch(searchUrl,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    //respnose is whatever the fetch returns
    .then(function (response){
        return response.json()
    })
    //data is whatever the above code returns
    .then(function (data){
        let searchResults = data.results
        displayArea.innerText = ''
        showSongName(searchResults)
    })
}
//function for displaying song results
function showSongName(songArray) {
    for (let song of songArray){
        let songReturnDiv = document.createElement('div')
        songReturnDiv.classList.add('songReturn')
        
        //audio preview
        let audioPlay = document.querySelector('.audioPlay')
        songReturnDiv.addEventListener('click', ()=>
            audioPlay.src = `${song.previewUrl}`
        )

        //div for song thumbnail with class
        let songImg = document.createElement('img')
        songImg.classList.add('songImage')
        songImg.src = `${song.artworkUrl100}`
        
        //song title div with class
        let songTitle = document.createElement('div')
        songTitle.classList.add('songTitle')
        songTitle.innerText = `Song: ${song.trackName}`
        
        //Band name
        let bandName = document.createElement('div')
        bandName.classList.add('bandName')
        bandName.innerText = `Artist: ${song.artistName}`
        
        songReturnDiv.appendChild(songImg)
        songReturnDiv.appendChild(songTitle)
        songReturnDiv.appendChild(bandName)
        displayArea.appendChild(songReturnDiv)
    }
}

