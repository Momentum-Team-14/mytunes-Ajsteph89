const container = document.querySelector(".container")

//Now playing 


//search bar & button
let searchBar = document.createElement('div')
searchBar.classList.add('searchBar')
container.appendChild(searchBar)

let typeBox = document.createElement('input')
typeBox.classList.add('typeBox')
searchBar.appendChild(typeBox)

let searchButton = document.createElement('button')
searchButton.innerText = "SEARCH"
searchButton.classList.add('button')
searchBar.appendChild(searchButton)

//Results Area with class
let resultsArea = document.createElement('div')
resultsArea.classList.add('resultsBar')
resultsArea.innerText = 'Search Results:'
container.appendChild(resultsArea)


//fetch stuff
let searchUrl = 'https://itunes.apple.com/search?term=iron%2Bmaiden'
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
        showSongName(searchResults)
    })
//function for displaying song results
function showSongName(songArray) {
    for (let song of songArray){
        let songReturnDiv = document.createElement('div')
        songReturnDiv.classList.add('songReturn')
        
        //div for song thumbnail with class
        let songImg = document.createElement('img')
        songImg.classList.add('songImage')
        songImg.scr = `${song.artworkUrl100}`
        
        //song title div with class
        let songTitle = document.createElement('div')
        songTitle.classList.add('songTitle')
        songTitle.innerText = `${song.trackName}`
        
        //Band name
        let bandName = document.createElement('div')
        bandName.classList.add('bandName')
        bandName.innerText = `${song.artistName}`
        
        songReturnDiv.appendChild(songImg)
        songReturnDiv.appendChild(songTitle)
        songReturnDiv.appendChild(bandName)
        resultsArea.appendChild(songReturnDiv)
    }
}

   
