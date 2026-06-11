const songs = [
{
    title: "Lofi Night",
    artist: "Chill Beats Collection",
    file: "songs/song1.mp3",
    cover: "images/cover1.jpg"
},
{
    title: "Mountain Chill",
    artist: "Relaxing Vibes",
    file: "songs/song2.mp3",
    cover: "images/cover2.jpg"
},
{
    title: "Rainy Relaxation",
    artist: "Peaceful Sounds",
    file: "songs/song3.mp3",
    cover: "images/cover3.jpg"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

function loadSong(index){

    currentSong = index;

    audio.src = songs[index].file;
    cover.src = songs[index].cover;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;

    audio.load();
}

loadSong(0);

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();
        playBtn.innerHTML =
        '<i class="fas fa-pause"></i>';

    }else{

        audio.pause();
        playBtn.innerHTML =
        '<i class="fas fa-play"></i>';

    }

});

document.getElementById("next")
.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

});

document.getElementById("prev")
.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

});

audio.addEventListener("loadedmetadata", () => {

    progress.max = audio.duration;

    let mins =
    Math.floor(audio.duration / 60);

    let secs =
    Math.floor(audio.duration % 60);

    if(secs < 10) secs = "0" + secs;

    duration.textContent =
    `${mins}:${secs}`;

});

audio.addEventListener("timeupdate", () => {

    progress.value = audio.currentTime;

    let mins =
    Math.floor(audio.currentTime / 60);

    let secs =
    Math.floor(audio.currentTime % 60);

    if(secs < 10) secs = "0" + secs;

    currentTime.textContent =
    `${mins}:${secs}`;

});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

audio.addEventListener("ended", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

});

function loadSong(index){

    currentSong = index;

    audio.src = songs[index].file;
    cover.src = songs[index].cover;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;

    audio.load();

    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';
}