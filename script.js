console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let play = document.querySelector('.play');
let previous = document.querySelector('.previous');
let next = document.querySelector(".next");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Salamat", filePath: "1.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b27366d70559846780218bb7f1ba" },
    { songName: "Saiyaar", filePath: "2.mp3", coverPath: "https://coverartarchive.org/release/8c8fbd92-71c8-473c-bd6a-1f3650b5f11c/42436390818.jpg" },
    { songName: "Ooo Humsafar", filePath: "3.mp3", coverPath: "https://i1.sndcdn.com/artworks-TgZFyHKio3PZdgik-WfsymQ-t500x500.jpg" },
    { songName: "Let me Love You", filePath: "4.mp3", coverPath: "https://www.bellanaija.com/wp-content/uploads/2016/07/unnamed-9-600x600-1.jpg" },
    { songName: "Sapphire", filePath: "5.mp3", coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgB_3aWnyN2sPjLX6VBBgPdfapPx72I89JQ&s" },
    { songName: "Tere Hawale", filePath: "6.mp3", coverPath: "https://c.saavncdn.com/119/Tere-Hawaale-From-Laal-Singh-Chaddha-Hindi-2022-20220804093945-500x500.jpg" },
];

let songItems = Array.from(document.getElementsByClassName("songItem"));

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause
play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-stop");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        play.classList.remove("fa-circle-stop");
        play.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

// Handle next
next.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-stop");
});

// Handle previous
previous.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-stop");
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek song
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Utility to reset all play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Click on song play icon
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = index;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-stop");
        gif.style.opacity = 1;
    });
});
