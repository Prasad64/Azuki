console.log("Welcome");

//Initialize Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Barishein - Anuv Jain", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kalle Kalle", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tenu Na Bol Pawan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Mileya Mileya", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Perfect - Ed Sheeran", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
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