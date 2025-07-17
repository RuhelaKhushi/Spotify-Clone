console.log("Welcome to Spotify")

//Initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salamat",filePath:"C:\Users\ruhel\Downloads\salamat-sarbjit-ringtone-majmasti-in-19554.mp3",coverPath:"covers/1.jpg"},
]

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click" ,()=>{
if(audioElement.paused || audioElement.currentTime<-0){
    audioElement.play();
}
})
//listen to events
document.addEventListener('timeupdate',()=>{
    console.log("timeupdate");

})