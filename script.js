console.log("Welcome");

//Initialize Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverpPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverpPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverpPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverpPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverpPath: "covers/1.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
})
